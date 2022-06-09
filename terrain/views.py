from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Terrain
from .serializers.populated import PopulatedTerrainSerializer

class TerrainListView(APIView):

  def get(self, _request):
    terrain = Terrain.objects.all()
    serialized_terrains = PopulatedTerrainSerializer(terrain, many=True)
    return Response(serialized_terrains.data, status.HTTP_200_OK)