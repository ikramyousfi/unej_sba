from django.shortcuts import render,get_object_or_404
from .models import articles
from rest_framework import generics,status
from .serializers import ArticleSerializer
from rest_framework.response import Response 
from rest_framework import authentication, permissions


#create an adhesion and get all articles
class Article(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
   
    def post(self, request, format=None):
        if  (request.auth.user.is_staff):
            print (request.auth.user.is_staff)
            serializer=self.serializer_class(data=request.data)
            if serializer.is_valid():
                print(serializer)
                serializer.save()
                print(serializer.data['photo'])
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)   
        else:
            return Response('You do not have permission to perform this action.',status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        queryset=articles.objects.all()
        serializer=self.serializer_class(queryset,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


#get article by id one by one modify and delete it
class articleById(generics.GenericAPIView):
    serializer_class=ArticleSerializer
    permission_classes=[permissions.IsAdminUser]

    def get(self, request, article_id):

        article=get_object_or_404(articles,id=article_id) 
        serializer=self.serializer_class(instance=article)
        return Response(serializer.data,status=status.HTTP_200_OK)


    def put(self,request,article_id):
        
        article=get_object_or_404(articles,pk=article_id)
        serializer=self.serializer_class(instance=article,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_200_OK)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request,article_id):
            
        article =get_object_or_404(articles,id=article_id)

        article.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)