# Generated by Django 4.2.2 on 2023-06-12 03:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Diary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(upload_to='')),
                ('first_name', models.CharField(max_length=255)),
                ('middle_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('date_of_birth', models.DateField()),
                ('hair_color', models.CharField(max_length=255)),
                ('eye_color', models.CharField(max_length=255)),
                ('height', models.IntegerField()),
                ('weight', models.IntegerField()),
                ('isAccepted', models.BooleanField()),
                ('life_experience', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='diary_life_experience', to=settings.AUTH_USER_MODEL)),
                ('status_conditions', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='diary_status_conditions', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
