from django.urls import path
from . import views
from .views import LoginView


urlpatterns = [
    path('login/', views.LoginView.as_view(), name='login'),
]