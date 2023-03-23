from django.urls import path
from .views import Post, AllPosts, PostIdView

urlpatterns =[
    path('post',Post.as_view()),
    path('posts-all',AllPosts.as_view()),
     path('posts/<int:post_id>',PostIdView.as_view()),
  
   
   
   
]