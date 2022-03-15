#from django.shortcuts import render

from .models import Message
from django.http import HttpResponse, JsonResponse

#def ru_version(request):
	return render(request, 'main/ru_version.html')

#def en_version(request):
	return render(request, 'main/en_version.html')

#def deposit(request):
	return render(request, 'main/deposit.html')

#def send(request):
#	if  request.POST.get('message').strip() != '':
#		message = request.POST.get('message')
#		new_message = Message.objects.create(value=message)
#		return HttpResponse('Message sent successfully')
#	else:
#		b = request.POST.get('message')
#
#		return render(request, 'main/ru_version.html')



def getMessages(request):
	messages = Message.objects.order_by('-id')[:15]
	#ТУТ НУЖНО РЕВЕРСНУТЬ И ПОЛУЧИТЬ ОБРАТНЫЙ СПИСОК
	return JsonResponse({"messages" : list(messages.values())})
