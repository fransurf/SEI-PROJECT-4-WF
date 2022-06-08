from rest_framework import serializers # serializers holds the ModelSerializer class to extend
from ..models import Board # import Board to provides model to serialise

class BoardSerializer(serializers.ModelSerializer):
  # define a Meta class that details the model and fields to serialize
  class Meta:
    model = Board
    fields = '__all__'