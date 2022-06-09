from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, ValidationError, PermissionDenied

from .models import Pre_loved
from .serializers.common import Pre_LovedSerializer


# * ALL PRELOVED BOARDS View
# GET all preloved & POST a preloved

class PrelovedListView(APIView):
  # permission_classes = (IsAuthenticated, )

  def get(self, _request):
    preloved = Pre_loved.objects.all()
    serialized_preloved = Pre_LovedSerializer(preloved, many=True)
    print('serialised preloveds', serialized_preloved.data)
    return Response(serialized_preloved.data, status.HTTP_200_OK)

# Getting error on this view when posting through insomnia - invalid data
# I think possibly because my owner field isn't created
  def post(self, request):
    deserialized_preloved = Pre_LovedSerializer(data=request.data)
    print('preloved post data ->', request.data)
    try:
      deserialized_preloved.is_valid()
      deserialized_preloved.save()
      return Response(deserialized_preloved.data, status.HTTP_201_CREATED)
    except Exception as e:
      print(e)
      print(type(e))
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)