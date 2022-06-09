from django.urls import path # path allows us to set the url pattern with an endpoint and a view
from .views import BoardListView, BoardDetailView

urlpatterns = [
  path('', BoardListView.as_view()),
  path('<int:pk>/', BoardDetailView.as_view())
]