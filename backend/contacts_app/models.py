from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=75)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=5)
    phone = models.CharField(max_length=12)
    email = models.EmailField()
    note = models.TextField()
    favorite = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
