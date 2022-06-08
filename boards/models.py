from django.db import models

# Create your models here.
class Board(models.Model):
  make = models.CharField(max_length=100, default=None)
  model = models.CharField(max_length=100, default=None)
  board_img = models.CharField(max_length=200, default=None)
  price = models.PositiveIntegerField(default=None)
  link = models.CharField(max_length=200, default=None)
  description = models.TextField(max_length=300, default=None)
  tech = models.TextField(max_length=300, default=None)
  # terrain = models.ManyToManyField(
  #   terrain.Terrain # model pathway that this field is related to
  #   related_name = 'boards'
  # )

  def __str__(self):
    return f"{self.make} - {self.model} [{self.terrain}]"
