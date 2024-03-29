from django.db import models
from django.contrib.auth.models import AbstractUser # provides basic user class to build upon

# Create your models here.
class User(AbstractUser):
  username = models.CharField(max_length=50, unique=True)
  email = models.EmailField(max_length=50, unique=True)
  profile_pic = models.CharField(max_length=200)