from django.db import models
from authentication.models import User

class Story(models.Model):
    place_of_birth = models.CharField(max_length=255)
    education = models.TextField(max_length=999)
    biography = models.TextField(max_length=999)
