# Generated by Django 3.2.13 on 2023-02-20 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_alter_articles_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='photo',
            field=models.FileField(null=True, upload_to='../static/articles'),
        ),
    ]
