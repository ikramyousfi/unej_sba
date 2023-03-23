from django.shortcuts import render
from django.contrib.auth.views import LogoutView


def index(request):
    return render(request, 'index.html')
