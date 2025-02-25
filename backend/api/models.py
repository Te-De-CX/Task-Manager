from django.db import models
from django.contrib.auth.models import User  # Import the User model

class Task(models.Model):
    # Task info
    name = models.CharField(max_length=200)
    
    description = models.TextField(max_length=10000)
    
    # Time of creation (toc)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Time to do the task (ttd)
    due_date = models.DateField()
    
    # Task author
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self):
        return self.name