# Generated by Django 4.2.2 on 2023-06-19 22:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='story',
            name='number_of_children',
        ),
        migrations.RemoveField(
            model_name='story',
            name='number_of_grandchildren',
        ),
        migrations.RemoveField(
            model_name='story',
            name='number_of_siblings',
        ),
    ]