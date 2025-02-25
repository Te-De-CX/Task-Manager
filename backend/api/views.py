# Import necessary modules and classes
# from django.shortcuts import render
# from django.http import HttpResponse
# from .models import Task  # Import the Task model
# from django.contrib.auth.models import User  # Import the User model
# from rest_framework import generics  # Import generics for class-based views
# from .serializers import UserSerializer, TaskSerializer  # Import serializers
# from rest_framework.permissions import IsAuthenticated, AllowAny  # Import permissions

# Create your views here.

# # A simple view to return a basic HTTP response
# def index(request):
#     return HttpResponse("HELLO, WORLD")

# View for listing and creating tasks
# class TaskListCreate(generics.ListCreateAPIView):
#     serializer_class = TaskSerializer  # Use the TaskSerializer for serialization
#     permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

#     # Define the queryset to filter tasks for the currently authenticated user
#     def get_queryset(self):
#         user = self.request.user  # Get the currently logged-in user
#         return Task.objects.filter(author=user)  # Return tasks authored by the user

#     # Override the perform_create method to set the author of the task
#     def perform_create(self, serializer):
#         if serializer.is_valid():  # Check if the data is valid
#             serializer.save(author=self.request.user)  # Save the task with the current user as the author
#         else:
#             print(serializer.errors)  # Print errors if the data is invalid

# # View for deleting a task
# class TaskDelete(generics.DestroyAPIView):
#     serializer_class = TaskSerializer  # Use the TaskSerializer for serialization
#     permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

#     # Define the queryset to filter tasks for the currently authenticated user
#     def get_queryset(self):
#         user = self.request.user  # Get the currently logged-in user
#         return Task.objects.filter(author=user)  # Return tasks authored by the user

# # View for creating a new user
# class CreateUserView(generics.CreateAPIView):
#     queryset = User.objects.all()  # Use all User objects as the queryset
#     serializer_class = UserSerializer  # Use the UserSerializer for serialization
#     permission_classes = [AllowAny]  # Allow any user (authenticated or not) to access this view

# New view for updating a task
# class TaskUpdate(generics.UpdateAPIView):
#     serializer_class = TaskSerializer  # Use the TaskSerializer for serialization
#     permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

#     # Define the queryset to filter tasks for the currently authenticated user
#     def get_queryset(self):
#         user = self.request.user  # Get the currently logged-in user
#         return Task.objects.filter(author=user)  # Return tasks authored by the user
    
    
#improve the api by using retrieve update and destroy


from .models import Task  
from django.contrib.auth.models import User 
from rest_framework import generics 
from .serializers import UserSerializer, TaskSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny 

class TaskListCreate(generics.ListCreateAPIView):
    serializer_class = TaskSerializer  
    permission_classes = [IsAuthenticated] 
    
    def get_queryset(self):
        user = self.request.user 
        return Task.objects.filter(author=user) 
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)  
        else:
            print(serializer.errors)  

class TaskRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer  # Use the TaskSerializer for serialization
    permission_classes = [IsAuthenticated]  # Only authenticated users can access this view

    def get_queryset(self):
        user = self.request.user  # Get the currently logged-in user
        return Task.objects.filter(author=user)  # Return tasks authored by the user
    
# View for creating a new user
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()  
    serializer_class = UserSerializer  
    permission_classes = [AllowAny] 