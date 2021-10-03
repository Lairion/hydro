from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, "hydro_capsule\templates\hidro_capsule\index.html", {})
