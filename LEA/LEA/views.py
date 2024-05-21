# LEA/views.py

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

def info(request):
    return render(request, 'info.html')

def custom_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if username == 'chatbotLEA' and password == 'angatu':
            # Credenciais corretas, redirecionar para a tela de "temas"
            return redirect('temas')
        else:
            # Credenciais incorretas, retornar uma mensagem de erro
            return render(request, 'login.html', {'error': 'Credenciais inválidas'})
    return render(request, 'login.html')

def temas(request):
    return render(request, 'temas.html')

def estomas(request):
    return render(request, 'estomas.html')

def cancerdemama(request):
    return render(request, 'cancerdemama.html')

def arboviroses(request):
    return render(request, 'arboviroses.html')
