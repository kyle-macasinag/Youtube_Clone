from django.urls import path
from . import views

urlpatterns = [
    path('<comment_id>/', views.get_replies)
]