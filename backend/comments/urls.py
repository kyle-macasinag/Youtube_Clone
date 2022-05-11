from django.urls import path
from . import views

urlpatterns = [
    path('<vid_id>/', views.get_all_comments),
    path('', views.add_comment),
    path('<pk>/update/', views.update_comment)
]
