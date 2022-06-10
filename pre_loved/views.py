from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, ValidationError, PermissionDenied

from pre_loved.serializers.populated import PopulatedPre_LovedSerializer

from .models import Pre_loved
from .serializers.common import Pre_LovedSerializer


# * ALL PRELOVED BOARDS View
# GET all preloved & POST a preloved

class PrelovedListView(APIView):
  permission_classes = (IsAuthenticated, )

  def get(self, _request):
    preloved = Pre_loved.objects.all()
    serialized_preloved = Pre_LovedSerializer(preloved, many=True)
    print('serialised preloveds', serialized_preloved.data)
    return Response(serialized_preloved.data, status.HTTP_200_OK)

# ? Owner is not updating - always inputs as 1 (default)
  def post(self, request):
    deserialized_preloved = Pre_LovedSerializer(data=request.data)
    request.data['owner'] = request.user.id
    
    print('preloved post data ->', request.data)
    try:
      deserialized_preloved.is_valid()
      deserialized_preloved.save()
      return Response(deserialized_preloved.data, status.HTTP_201_CREATED)
    except Exception as e:
      print(e)
      print(type(e))
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)

class PrelovedDetailView(APIView):

  def get_preloved(self, pk):
    try:
      print(Pre_loved)
      return Pre_loved.objects.get(pk=pk)
    except Pre_loved.DoesNotExist as e:
      print(e)
      raise NotFound({ "detail": str(e) })

  def get(self, _request, pk):
    preloved = self.get_preloved(pk)
    print('preloved ->', preloved)
    serialised_preloved = PopulatedPre_LovedSerializer(preloved)
    return Response(serialised_preloved.data, status.HTTP_200_OK)



  def delete(self, _request, pk):
    preloved_to_delete = self.get_preloved(pk)
    print("deleting a board ->", preloved_to_delete)
    preloved_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


