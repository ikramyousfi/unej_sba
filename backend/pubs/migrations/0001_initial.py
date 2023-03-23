# Generated by Django 3.2.13 on 2023-02-06 11:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='publications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=25)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='photos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.FileField(null=True, upload_to='./pubs/pub')),
                ('posts', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photo_post', to='pubs.publications')),
            ],
        ),
    ]
