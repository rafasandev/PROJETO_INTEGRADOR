# Generated by Django 4.2.6 on 2023-11-22 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_interesse'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='foto_perfil',
            field=models.TextField(blank=True, null=True),
        ),
    ]