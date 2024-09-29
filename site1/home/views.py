from django.shortcuts import render

# Create your views here.

def get_home(request):
    return render(request, 'home.html')
def get_login(request):
    return render(request, "login.html")
def get_index(request):
    return render(request, "index.html")