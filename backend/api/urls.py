# from django.urls import path
# from . import views

# urlpatterns = [
#     # Home page or index view
#     path('', views.index, name="index"),

#     # Endpoint for listing and creating tasks
#     path('tasks/', views.TaskListCreate.as_view(), name="task_list"),

#     # Endpoint for deleting a specific task (using the task's primary key)
#     path('tasks/delete/<int:pk>/', views.TaskDelete.as_view(), name="delete_task"),

#     # Endpoint for updating a specific task (using the task's primary key)
#     path('tasks/update/<int:pk>/', views.TaskUpdate.as_view(), name="update_task"),
# ]

#retrieve update and destroy 
from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.TaskListCreate.as_view(), name="task_list"),
    path('tasks/<int:pk>/', views.TaskRetrieveUpdateDestroy.as_view(), name="task_detail"),
]