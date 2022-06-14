from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Terrain
from .serializers.common import TerrainSerializer
from .serializers.populated import PopulatedTerrainSerializer

class TerrainListView(APIView):

  def get(self, _request):
    terrain = Terrain.objects.all()
    serialized_terrains = TerrainSerializer(terrain, many=True)
    return Response(serialized_terrains.data, status.HTTP_200_OK)



class TerrainDetailView(APIView):

  def get_terrain(self, type):
    try:
      return Terrain.objects.get(type=type)
    except Terrain.DoesNotExist as e:
      print(e)
      return NotFound({ 'detail': str(e) })

  def get(self, _request, type):
    terrain = self.get_terrain(type)
    serialized_terrain = PopulatedTerrainSerializer(terrain)
    return Response(serialized_terrain.data, status.HTTP_200_OK)

