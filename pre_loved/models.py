from django.db import models
from datetime import datetime

# Create your models here.
class Pre_loved(models.Model):
  make = models.CharField(max_length=100, default=None)
  model = models.CharField(max_length=100, default=None)
  board_img = models.CharField(max_length=200, default=None)
  price = models.PositiveIntegerField(default=None)
  description = models.TextField(max_length=500, default=None)
  created_at = models.DateTimeField(auto_now_add=True) # timestamp = time of submission
  owner = models.ForeignKey(
    'jwt_auth.User', # the model to look for the FK on
    related_name = 'pre_loved', # the field name to look for
    on_delete = models.CASCADE, # delete pre_loved ad, if the user is deleted
    default = 1
  )