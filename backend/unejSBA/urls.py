"""unejSBA URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf.urls.static import static
from django.conf import settings

# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
# from rest_framework.routers import DefaultRouter
# from accounts import views


# from django.contrib.auth.views import LogoutView



urlpatterns = [
    # path('', views.index),
    path('admin/', admin.site.urls),
    path('api/', include('adherents.urls')),
    path('api/', include('articles.urls')),
    path('api/', include('pubs.urls')),
    path('api/', include('accounts.urls')),
    # path('api-auth/', include('rest_framework.urls')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   
    
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# router = DefaultRouter()
# router.register(r"user", views.UserViewSet, basename="user")
# urlpatterns += router.urls
