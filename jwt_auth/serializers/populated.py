from .common import UserSerializer
from pre_loved.serializers.common import Pre_LovedSerializer

class PopulatedUserSerializer(UserSerializer):
  pre_loved = Pre_LovedSerializer(many=True)