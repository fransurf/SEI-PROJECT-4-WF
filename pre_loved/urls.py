from django.urls import path
from .views import PrelovedListView

urlpatterns = [
  path('', PrelovedListView.as_view())
]