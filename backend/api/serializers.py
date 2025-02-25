# Import the User model from Django's built-in authentication system
from django.contrib.auth.models import User

# Import the Task model from the current directory's models.py file
from .models import Task

# Import the serializers module from Django REST Framework (DRF)
from rest_framework import serializers

# Define a serializer for the User model
class UserSerializer(serializers.ModelSerializer):
    # Meta class is used to configure the serializer
    class Meta:
        # Specify the model this serializer is associated with (User)
        model = User
        # Specify the fields to include in the serialized output
        fields = ["id", "username", "password", "email"]
        # extra_kwargs allows you to add additional options for specific fields
        extra_kwargs = {
            # Ensure the password field is write-only (not included in responses)
            "password": {"write_only": True}
        }

    # Override the create method to handle user creation
    def create(self, validated_data):
        # Use Django's create_user method to create a new user with hashed password
        user = User.objects.create_user(**validated_data)
        return user

# Define a serializer for the Task model
class TaskSerializer(serializers.ModelSerializer):
    # Meta class is used to configure the serializer
    class Meta:
        # Specify the model this serializer is associated with (Task)
        model = Task
        # Specify the fields to include in the serialized output
        fields = ["id", "name", "description", "created_at", "due_date", "author"]
        # extra_kwargs allows you to add additional options for specific fields
        extra_kwargs = {
            # Ensure the author field is read-only (cannot be modified via the API)
            "author": {"read_only": True}
        }