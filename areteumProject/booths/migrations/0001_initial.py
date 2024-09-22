# Generated by Django 4.2.16 on 2024-09-22 10:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booth',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='부스명')),
                ('host', models.CharField(max_length=50, verbose_name='운영주체')),
                ('place', models.CharField(max_length=50, verbose_name='위치')),
                ('date', models.CharField(choices=[('day1', 'day1'), ('day2', 'day2'), ('both', 'both')], max_length=10, verbose_name='날짜')),
                ('time_day1', models.CharField(blank=True, max_length=20, null=True, verbose_name='10/1 운영시간')),
                ('time_day2', models.CharField(blank=True, max_length=20, null=True, verbose_name='10/2 운영시간')),
                ('category', models.CharField(choices=[('체험', '체험'), ('주점', '주점'), ('마켓', '마켓'), ('체험+마켓', '체험+마켓')], max_length=10, verbose_name='카테고리')),
                ('introduction', models.TextField(blank=True, null=True, verbose_name='부스소개')),
                ('image', models.ImageField(blank=True, null=True, upload_to='booth-image', verbose_name='사진')),
            ],
        ),
        migrations.CreateModel(
            name='SomTalk',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now_add=True, verbose_name='작성시간')),
                ('comment', models.TextField(max_length=44, verbose_name='내용')),
            ],
        ),
        migrations.CreateModel(
            name='MenuGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='메뉴그룹명')),
                ('price', models.PositiveIntegerField(blank=True, null=True, verbose_name='가격')),
                ('booth', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='menu_group', to='booths.booth', verbose_name='해당 부스')),
            ],
        ),
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=50, verbose_name='음식명')),
                ('price', models.PositiveIntegerField(blank=True, null=True, verbose_name='가격')),
                ('menu_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='inner_food', to='booths.menugroup', verbose_name='해당 메뉴그룹')),
            ],
        ),
    ]
