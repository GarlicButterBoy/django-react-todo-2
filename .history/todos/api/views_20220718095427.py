from rest_framework import viewsets
from .serializers import TodoSerializer
from todos.models import Todo


class TodoViewSet