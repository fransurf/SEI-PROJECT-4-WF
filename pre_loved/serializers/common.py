from rest_framework import serializers
from ..models import Pre_loved

class Pre_LovedSerializer(serializers.ModelSerializer):
  class Meta:
    model = Pre_loved
    fields = '__all__'