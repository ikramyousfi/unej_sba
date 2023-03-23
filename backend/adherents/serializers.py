from rest_framework import serializers
from .models import adherents, diplomes

class AdhesionSerializer(serializers.ModelSerializer):
    dp = serializers.ListField(
        child=serializers.FileField(max_length=100000,allow_empty_file=False,use_url=False ))
    
    class Meta:
        model=adherents
        fields='__all__'
        


class diplomeSerializer(serializers.ModelSerializer):
   
    class Meta:
        model=diplomes
        fields=['diplome']
    
class diplomeAdhesionSerializer(serializers.ModelSerializer):
    diplomes_adherent=diplomeSerializer(many=True)
   
    class Meta:
        model=adherents
        fields='__all__'
    


class AdhesionChangeStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model=adherents
        fields=['status']


