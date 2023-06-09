# Generated by Django 3.2.13 on 2023-01-07 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='articles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=25)),
                ('subTitle', models.CharField(blank=True, max_length=25)),
                ('description', models.CharField(blank=True, max_length=255)),
                ('keywords', models.CharField(blank=True, max_length=25)),
                ('photo', models.FileField(null=True, upload_to='./articles/pics')),
            ],
        ),
    ]
