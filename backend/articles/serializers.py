from rest_framework import serializers
from .models import articles



# class FileSerializer(serializers.Serializer):
#     title = serializers.CharField(max_length=25)
#     photo = serializers.ListField(
#         child=serializers.FileField(max_length=100000,allow_empty_file=False,use_url=False ))
    
#     class Meta:
#         model=articles
#         fields='__all__'

#     def create(self, validated_data):
        
#         foto=validated_data.pop('photo')   
#         print(foto)
#         title=validated_data['title']
#         image_list = [] 
#         for img in foto:
#             photo=articles.objects.create(title=title, photo=img)
#             imageurl = f'{photo.photo.url}'
#             image_list.append(imageurl) 
#         return image_list


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model=articles
        fields='__all__'
