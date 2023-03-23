from django.db import models
from datetime import date
from rest_framework.authtoken.models import Token

# Create your models here.

CHOICES = [
    ('pending', 'pending'),
    ('accepted', 'accepted'),
    ('rejected', 'rejected'),
]


class adherents(models.Model):
    nom = models.CharField(max_length=25, blank=True)
    prenom= models.CharField(max_length=25, blank=True)
    nomArabe= models.CharField(max_length=25, blank=True)
    prenomArabe= models.CharField(max_length=25, blank=True)
    email = models.EmailField(max_length=30, unique=True, blank=True)
    phone = models.CharField(max_length=10, unique=True, blank=True)
    dateNaissance= models.DateField( blank=True)
    communes=models.CharField(max_length=25, blank=True)
    adresse= models.CharField(max_length=35, blank=True)
    status = models.CharField(max_length=10,choices=CHOICES,default='pending')
    photo=models.FileField(upload_to='adhesion/pics', null=True)
    recuPaiement=models.FileField(upload_to='adhesion/files', null=True)
    


    def __str__(self):
        return self.nom


class diplomes(models.Model):
    diplome=models.FileField(upload_to='adhesion/diplomes', null=True)
    adherent = models.ForeignKey(adherents,on_delete=models.CASCADE, related_name='diplomes_adherent')
