from django.urls import path


app_name = 'weather'
url_patterns = [
	path('', views.home, name="home"),
] 
