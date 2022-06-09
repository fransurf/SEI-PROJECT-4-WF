from django.forms import ValidationError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied, ValidationError


from datetime import datetime, timedelta # for creating timestamp
from django.conf import settings
import jwt

# Serializers
from .serializers.common import UserSerializer

# User model
from django.contrib.auth import get_user_model
User = get_user_model()


class RegisterView(APIView):

  def post(self, request):
    user_to_add = UserSerializer(data=request.data)
    # ^ deserialise request
    print('REQUEST BODY ->', request.data)

    try:
      user_to_add.is_valid(True)
      user_to_add.save()
      # ^ check its valid(set to True here in order to throw error if false) & save()
      return Response({ 'message': 'Registration Successful!'}, status.HTTP_202_ACCEPTED)

    except ValidationError:
      return Response(user_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)

    except Exception as e:
      print(e)
      print(type(e))
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

  def post(self, request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
      user_to_login = User.objects.get(email=email)
    except User.DoesNotExist:
      raise PermissionDenied('Invalid credentials')
    # ^ Check the user exists, otherwise raise error

    if not user_to_login.check_password(password):
      raise PermissionDenied('Invalid credentials') 
    # ^ Check the plainText password against stored hashed password using check_password()

    # THE USER IS VERIFIED
    dt = datetime.now() + timedelta(hours=24)
    # ^ create date/time stamp, valid for 24hrs

    token = jwt.encode(
      {
        'sub': user_to_login.id,
        'exp': int(dt.strftime('%s'))
      },
      settings.SECRET_KEY,
      algorithm='HS256'
    )
    # ^ Build a token to compare on validation requests

    return Response({ "message": f"Welcome back {user_to_login.username}", "token": token}, status.HTTP_202_ACCEPTED)




