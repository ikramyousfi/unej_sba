# Generated by Django 3.2.13 on 2023-03-08 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adherents', '0003_alter_diplomes_adherent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adherents',
            name='photo',
            field=models.FileField(upload_to='adhesion/pics'),
        ),
        migrations.AlterField(
            model_name='adherents',
            name='recuPaiement',
            field=models.FileField(upload_to='adhesion/files'),
        ),
        migrations.AlterField(
            model_name='diplomes',
            name='diplome',
            field=models.FileField(null=True, upload_to='adhesion/diplomes'),
        ),
    ]
