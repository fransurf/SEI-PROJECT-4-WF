# Generated by Django 4.0.5 on 2022-06-08 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(default=None, max_length=100)),
                ('model', models.CharField(default=None, max_length=100)),
                ('board_img', models.CharField(default=None, max_length=200)),
                ('price', models.PositiveIntegerField(default=None)),
                ('link', models.CharField(default=None, max_length=200)),
                ('description', models.TextField(default=None, max_length=300)),
                ('tech', models.TextField(default=None, max_length=300)),
            ],
        ),
    ]
