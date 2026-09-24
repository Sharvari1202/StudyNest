from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Note",
            fields=[
                (
                    "id",
                    models.IntegerField(primary_key=True, serialize=False),
                ),
                ("title", models.CharField(max_length=200)),
                ("description", models.TextField()),
                ("content", models.TextField()),
                ("category", models.CharField(max_length=100)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={"ordering": ["id"]},
        ),
    ]
