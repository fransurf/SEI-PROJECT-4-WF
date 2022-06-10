from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError # error thrown if mismatch = password v password_conf 

# User model
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  # define password & password_confirmation as write_only
  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)

  def validate(self, data):

    password = data.pop('password')
    password_confirmation = data.pop('password_confirmation')
    # ^ remove password and password_confirmation from the data dict using pop()
    # good for checking they match ALSO we will then readd the hashed password, so no plaintext password is visible

    if password != password_confirmation:
      raise ValidationError({
        'password_confirmation': 'Does not match password'
      })
    # ^ if the password_confirmation doesn't match the password, then raise error

    # try:
    #   password_validation.validate_password(password)
    # except ValidationError as e:
    #   print(e)
    #   raise ValidationError({
    #     'password': e.messages
    #   })
    # ^ Checks the password is secure according to default validation

    data['password'] = make_password(password)
    # ^ creates a hashed password using make_password() [import above]

    return data

  class Meta:
    model = User
    fields = ('id', 'email', 'username', 'profile_pic', 'password', 'password_confirmation')
