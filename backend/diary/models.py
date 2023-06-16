from django.db import models
from authentication.models import User
from medical.models import Medical
from story.models import Story

class Diary(models.Model):
    picture = models.ImageField()
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    hair_color = models.CharField(max_length=255)
    eye_color = models.CharField(max_length=255)
    height = models.IntegerField()
    weight = models.IntegerField()
    status_conditions = models.ForeignKey(Medical, related_name='diary_status_conditions', on_delete=models.CASCADE)
    life_experience = models.ForeignKey(Story, related_name='diary_life_experience', on_delete=models.CASCADE)
    isAccepted = models.BooleanField()