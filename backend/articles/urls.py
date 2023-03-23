from django.urls import path
from .views import Article,articleById

urlpatterns =[
    path('article',Article.as_view()),
    path('article/<int:article_id>',articleById.as_view()),
   
   
   
]