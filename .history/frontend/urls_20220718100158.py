from django.urls import path
from .views import index, TodoDetailView

urlpattens = [
    path('', index),
    path('edit/<int:pk>', TodoDetailView.as_view()),
    path('delete/<int:pk>', TodoDetailView.as_view())
]