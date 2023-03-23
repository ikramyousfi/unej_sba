
# from rest_framework import viewsets
# from rest_framework.permissions import IsAuthenticated

# from .serializers import UserSerializer


# class UserViewSet(viewsets.ModelViewSet):
#     """
#     UserModel View.
#     """

#     permission_classes = (IsAuthenticated,)
#     serializer_class = UserSerializer
#     queryset = get_user_model().objects.all()

from django.contrib.auth import authenticate
from django.utils.translation import ugettext_lazy as _
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.views import APIView
# class LoginView(ObtainAuthToken):
#     def post(self, request, *args, **kwargs):
#         username = request.data.get('username', None)
#         password = request.data.get('password', None)

#         serializer = self.serializer_class(data=request.data,
#                                            context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
      
#         users = authenticate(request, username=username, password=password)
#         print(users.is_superuser)
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({'token': token.key})

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username', None)
        password = request.data.get('password', None)
        
        if not username or not password:
            raise AuthenticationFailed_('Missing username or password')
        
        user = authenticate(request, username=username, password=password)
       
        if not user:
            raise AuthenticationFailed('Invalid username or password')
        
        if not user.is_superuser:
            raise AuthenticationFailed('User is not an admin')
       
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})

class LogoutView(APIView):
    def post(self, request):
        user = request.user
        if user.is_authenticated:
            Token.objects.filter(user=user).delete()
            request.session.flush()
            return Response(status=200) 
        else:
            return Response(status=400)
