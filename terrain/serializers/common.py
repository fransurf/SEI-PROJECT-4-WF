from rest_framework.serializers import ModelSerializer
from ..models import Terrain

class TerrainSerializer(ModelSerializer):
  class Meta:
    model = Terrain
    fields = '__all__'