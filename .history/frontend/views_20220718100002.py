from django.shortcuts import render
from django.views.generic.detail import DetailView
from todos.models import Todo

# Create your views here.
def index(request):
    return render(request, 'frontend/')