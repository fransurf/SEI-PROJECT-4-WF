from django.urls import path
from .views import PrelovedListView, PrelovedDetailView

urlpatterns = [
  path('', PrelovedListView.as_view()),
  path('<int:pk>/', PrelovedDetailView.as_view())
]