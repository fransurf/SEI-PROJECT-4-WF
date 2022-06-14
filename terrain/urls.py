import django


from django.urls import path
from .views import TerrainListView, TerrainDetailView

urlpatterns = [
  path('', TerrainListView.as_view()),
  path('<type>/', TerrainDetailView.as_view())
]