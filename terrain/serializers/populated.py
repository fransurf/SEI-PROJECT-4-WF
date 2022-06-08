from .common import TerrainSerializer
from boards.serliazers.common import BoardSerializer

class PopulatedTerrainSerializer(TerrainSerializer):
  boards = BoardSerializer(many=True)