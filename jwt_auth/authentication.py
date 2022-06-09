from rest_framework.authentication import BasicAuthentication # base class to inherit -> overwrite with authenticate method
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
User = get_user_model() # finds active user in model

from django.conf import settings
import jwt

class JWTAuthentication(BasicAuthentication):

  def authenticate(self, request):
    header = request.headers.get('Authorization')
    # ^ make sure Authorization header exists on request

    if not header:
      return None
      # ^ if header doesn't exist, raise error

    if not header.startswith('Bearer'):
      raise PermissionDenied(detail = "Auth token is invalid")
      # ^ check header is in correct format (e.g. begins with Bearer)

    token = header.replace('Bearer ', '')
    # ^ if those conditions are met remove 'Bearer ', using replace() method

    try:
      payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
      # ^ decode the token to grab the payload using decode(jwt, SECRET, algorithm)
      # at this point, token is valid; payload var contains all payload info

      user = User.objects.get(pk=payload.get('sub'))
      # ^ get the user by matching their unique jwt key ('payload.sub') and their pk

    except jwt.exceptions.InvalidTokenError:
      raise PermissionDenied(detail="Invalid token")
      # ^ this is raised if the token is invalid

    except User.DoesNotExist:
      raise PermissionDenied(detail="User not found")
      # ^ this is raised if the sub from payload doesn't match the pk in user table

    return (user, token)
    # User is authenticated, so return user and token (as auth)
