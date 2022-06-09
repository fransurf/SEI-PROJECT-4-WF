import django


from django.urls import path
from .views import TerrainListView

urlpatterns = [
  path('', TerrainListView.as_view())
]