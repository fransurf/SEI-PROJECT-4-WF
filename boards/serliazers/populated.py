from .common import BoardSerializer # import BS to inherit
from terrain.serializers.common import TerrainSerializer

class PopulatedBoardSerializer(BoardSerializer):
  terrain = TerrainSerializer(many=True)