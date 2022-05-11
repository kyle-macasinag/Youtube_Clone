from django.urls import path, include
from . import views

urlpatterns = [
    path('<pk>/', views.get_all_comments),
]
