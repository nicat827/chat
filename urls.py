from django.urls import path, include
from . import views


urlpatterns = [
    path('en', views.en_version, name='eng-version'),
	path('', views.ru_version, name='ru-version'),
	path('deposit', views.deposit, name='deposit'),
	path('send', views.send, name='send'),
	path('getMessages', views.getMessages, name='getMessages')

]