# Generated by Django 3.2.13 on 2023-03-08 23:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adherents', '0011_auto_20230308_2344'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adherents',
            name='photo',
            field=models.FileField(blank=True, null=True, upload_to='adhesion/pics'),
        ),
        migrations.AlterField(
            model_name='adherents',
            name='recuPaiement',
            field=models.FileField(blank=True, null=True, upload_to='adhesion/files'),
        ),
    ]