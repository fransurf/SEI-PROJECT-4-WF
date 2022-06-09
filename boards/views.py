from rest_framework.views import APIView # helps create the very useful API view
from rest_framework.response import Response # allows us to provide informative responses 
from rest_framework import status # list of status codes
from rest_framework.exceptions import NotFound # provides an exception that will send a 404 response to end user

# custom imports
from .models import Board # the model that will be used to query the db
from .serliazers.common import BoardSerializer # python format of initial queryset
from .serliazers.populated import PopulatedBoardSerializer # python format of extended initial queryset (incl Terrrain)

# import permissions
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# * The ALL BOARDS view
class BoardListView(APIView):
  permission_classes = (IsAuthenticatedOrReadOnly, ) # one-tuple, requires trailing comma

  # ENDOPINTS & METHODS:
  # GET (all) /albums/
  # ? CONSIDER POST (one) /albums/ -> ADMIN ONLY!! USERS CANNOT POST BOARDS

  # * GET all boards
  def get(self, _request):
    boards = Board.objects.all() # get all items and fields within the boards table
    serilialized_boards = BoardSerializer(boards, many=True) # takes queryset and applies serializer
    # print('Serialised data ->', serilialized_boards.data)
    return Response(serilialized_boards.data, status.HTTP_200_OK)

  #  * POST a board
  def post(self, request):
    # print('REQUEST ->', request.data)
    deserialized_board = BoardSerializer(data=request.data)
    # ^ deserialise the incoming data request to python format
    try: 
      deserialized_board.is_valid()
      deserialized_board.save()
      # ^ check the data is in valid format, if so, save
      return Response(deserialized_board.data, status.HTTP_201_CREATED)

    except Exception as e:
      print(e)
      print(type(e))
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)



# * INDIVIDUAL BOARD view
class BoardDetailView(APIView):
  # * IMPORTANT!!! AT THIS POINT MUST UPDATE URLS.PY WITH INDIVIDUAL PATH('<int:pk>/')

  permission_classes = (IsAuthenticatedOrReadOnly, ) # one-tuple, requires trailing comma

  # CUSTOM FUNCTION TO GET A BOARD THAT WILL BE APPLIED TO OTHER SINGULAR BOARD FUNCTIONS
  # Attempt to find a board and throw an error if not found
  def get_board(self, pk):
    try:
      return Board.objects.get(pk=pk)
      # ^ Find and return one board object from the table using pk as reference
    except Board.DoesNotExist as e:
      print(e)
      return NotFound({ 'detail': str(e) })
      # ^ raise NotFound exception

  # * GET ONE BOARD
  def get(self, _request, pk):
    board = self.get_board(pk)
    # print('get board ->', board)
    serialized_board = PopulatedBoardSerializer(board)
    return Response(serialized_board.data, status.HTTP_200_OK)

  # * PUT - UPDATE ONE BOARD
  def put(self, request, pk):
    board_to_update = self.get_board(pk)
    deserialized_board = BoardSerializer(board_to_update, request.data)
    # ^ deserialise the request adding to the relevant board
    try:
      deserialized_board.is_valid()
      deserialized_board.save()
      # ^ check it's valid and save if so
      return Response(deserialized_board.data, status.HTTP_202_ACCEPTED)
    except Exception as e:
      print(e)
      print(type(e))
      return Response({ 'detail': str(e) }, status.HTTP_422_UNPROCESSABLE_ENTITY)

  # * DELETE
  def delete(self, _request, pk):
    board_to_delete = self.get_board(pk)
    board_to_delete.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
