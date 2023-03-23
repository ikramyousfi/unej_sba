from rest_framework import serializers
from .models import publications, photos

class PhotosSerializer(serializers.ModelSerializer):
       
    class Meta:
        model=photos
        fields=['photo']
    
class PostPhotoSerializer(serializers.ModelSerializer):
    photo_post=PhotosSerializer(many=True)
   
    class Meta:
        model=publications
        fields='__all__'
    



class PostSerializer(serializers.ModelSerializer):
    photo_post=serializers.ListField(
        child=serializers.FileField(max_length=100000,allow_empty_file=False,use_url=False ))

    class Meta:
        model=publications
        fields='__all__'