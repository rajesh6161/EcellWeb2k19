# Generated by Django 2.2.2 on 2019-08-18 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='user_type',
            field=models.CharField(choices=[('GST', 'Guest'), ('VLT', 'Voluteer'), ('EXE', 'Executive'), ('MNG', 'Manager'), ('HCO', 'Head Co-ordinator'), ('OCO', 'Overall Co-ordinator'), ('CAB', 'Campus Ambassador'), ('STO', 'Startup Owner')], default='GST', max_length=3),
        ),
    ]
