# Generated by Django 4.0.5 on 2022-06-10 11:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pre_loved', '0002_pre_loved_created_at_pre_loved_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pre_loved',
            name='created_at',
        ),
    ]
