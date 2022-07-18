from django.urls import path
from .views import index, TodoDetailView

urlpattens = [
    path('', index),
    path('edit/<int:p')
]