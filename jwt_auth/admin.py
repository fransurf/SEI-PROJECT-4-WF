from django.contrib import admin
from django.contrib.auth import get_user_model
User = get_user_model()
# ^ make a class of User from the default get_user_model
# ^ get_user_model returns whatever model is active in this app (the one we have created in models.py)


# Register your models here.
admin.site.register(User)