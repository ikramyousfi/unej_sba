# Generated by Django 3.2.13 on 2023-01-07 21:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('adherents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diplomes',
            name='adherent',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dp', to='adherents.adherents'),
        ),
    ]
