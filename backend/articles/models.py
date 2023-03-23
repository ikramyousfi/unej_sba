from django.db import models

class articles(models.Model):
    title = models.CharField(max_length=25, blank=True)
    subTitle= models.CharField(max_length=25, blank=True)
    description= models.TextField( blank=True)
    keywords= models.CharField(max_length=25, blank=True)
    photo=models.FileField(upload_to='articles', null=True)
    