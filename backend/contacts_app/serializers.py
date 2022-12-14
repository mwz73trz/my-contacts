from rest_framework import serializers
from .models import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'first_name', 'last_name', 'address', 'city', 'state', 'zipcode', 'phone', 'email', 'note', 'favorite']