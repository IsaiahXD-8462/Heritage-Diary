from django.urls import path, include
from diary import views

urlpatterns = [
    path('', views.diary_list),
    path('<int:pk>', views.diary_detail)
]