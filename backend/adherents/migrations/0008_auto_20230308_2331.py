# Generated by Django 3.2.13 on 2023-03-08 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adherents', '0007_alter_adherents_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adherents',
            name='photo',
            field=models.FileField(null=True, upload_to='adhesion/pics/'),
        ),
        migrations.AlterField(
            model_name='adherents',
            name='recuPaiement',
            field=models.FileField(null=True, upload_to='adhesion/files/'),
        ),
    ]
