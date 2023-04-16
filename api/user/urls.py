from django.urls import path
from user.views import user_profile, create_user

urlpatterns = [
    path('profile', user_profile),
    path('create/user', create_user),
]
