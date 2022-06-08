from django.db import models

# Create your models here.
class Pre_loved(models.Model):
  make = models.CharField(max_length=100, default=None)
  model = models.CharField(max_length=100, default=None)
  board_img = models.CharField(max_length=200, default=None)
  price = models.PositiveIntegerField(default=None)
  owner = models.ForeignKey(
    'jwt_auth.User', # the model to look for the FK on
    related_name = 'pre_loved', # the field name to look for
    on_delete = models.CASCADE, # delete pre_loved ad, if the user is deleted
    default = 1
  )