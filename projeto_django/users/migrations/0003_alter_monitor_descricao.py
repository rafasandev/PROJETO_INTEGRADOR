# Generated by Django 4.2.7 on 2023-11-25 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_usuario_contato_numero_1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='monitor',
            name='descricao',
            field=models.TextField(blank=True),
        ),
    ]