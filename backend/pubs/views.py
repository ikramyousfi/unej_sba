from django.shortcuts import render,get_object_or_404
from .models import publications, photos
from rest_framework import generics,status
from .serializers import PostSerializer, PostPhotoSerializer
from rest_framework.response import Response 
from rest_framework import authentication, permissions

# Create your views here.
class Post(generics.GenericAPIView):
    serializer_class = PostSerializer
    
    def post(self, request):
        serializer=self.serializer_class(data=request.data)

        post=publications(
            title=request.data['title'],
            description=request.data['description'],     
        )
        print(request.data)
        if serializer.is_valid():
            post.save()
            photo_post=request.data.pop('photo_post') 
            

            print(serializer.data)
            for img in photo_post:
                photos.objects.create(posts=post, photo=img)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)  
      

class AllPosts(generics.GenericAPIView):
    serializer_class = PostPhotoSerializer
    # permission_classes = [permissions.IsAdminUser]
    def get(self,request):

        adherent = publications.objects.all()
        serializer = self.serializer_class(adherent, many =True)
        return Response(serializer.data,status=status.HTTP_200_OK)


class PostIdView(generics.GenericAPIView):
    serializer_class = PostPhotoSerializer
    permission_classes = [permissions.IsAdminUser]
    def get(self, request, post_id):
        post=get_object_or_404(publications,id=post_id) 
        serializer=self.serializer_class(instance=post)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
        