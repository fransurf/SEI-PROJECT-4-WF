from django.db import models

# Create your models here.
class Terrain(models.Model):
  type = models.CharField(max_length=50, default=1)

  def __str__(self):
    return f"{self.type}"