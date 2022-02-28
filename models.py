from django.db import models

from django.db import models
from datetime import datetime
from django.utils.dateformat import DateFormat

# Create your models here.

class Message(models.Model):
	
	value = models.CharField(max_length=100)
	date = models.DateTimeField(blank=True, default=datetime.now)
	

	user = models.CharField(max_length=20)