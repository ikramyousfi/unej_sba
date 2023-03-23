from django.db import models

# Create your models here.

class publications(models.Model):
    title = models.CharField(max_length=25, blank=True)
    description= models.TextField()

    def __str__(self):
        return self.title
    
 



class photos(models.Model):
    photo=models.FileField(upload_to='./pubs/pub', null=True)
    posts = models.ForeignKey(publications,on_delete=models.CASCADE, related_name='photo_post')

