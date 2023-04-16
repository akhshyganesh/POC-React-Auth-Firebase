from django.db import models
import uuid

class CustomUser(models.Model):
    id = models.UUIDField(auto_created=True, primary_key=True, default=uuid.uuid4)
    created = models.DateTimeField(auto_now_add=True)
    uid = models.CharField(unique=True, max_length=100, blank=False)
    email = models.CharField(unique=True, max_length=100, default='')
    first_name = models.CharField(max_length=100, default='')
    last_name = models.CharField(max_length=100, default='')
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.email
