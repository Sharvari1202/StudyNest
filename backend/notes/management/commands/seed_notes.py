from django.core.management.base import BaseCommand
from notes.models import Note

SEED_DATA = [
    {
        "id": 1001,
        "title": "Java OOP",
        "description": "Core concepts of object-oriented programming in Java.",
        "content": "Java OOP focuses on encapsulation, inheritance, and polymorphism to model real-world systems effectively.",
        "category": "Java",
    },
    {
        "id": 1002,
        "title": "Java Inheritance",
        "description": "Use inheritance to reuse and extend class behavior.",
        "content": "Inheritance allows a subclass to reuse fields and methods from a parent class, reducing duplication and organizing logic.",
        "category": "Java",
    },
    {
        "id": 1003,
        "title": "Java Polymorphism",
        "description": "One interface, many implementations in Java.",
        "content": "Polymorphism allows methods to behave differently depending on the object type that invokes them.",
        "category": "Java",
    },
    {
        "id": 1004,
        "title": "SQL Joins",
        "description": "Understand how relational tables connect through joins.",
        "content": "SQL joins combine rows from different tables using common keys to answer more complex queries.",
        "category": "SQL",
    },
    {
        "id": 1005,
        "title": "HTML Basics",
        "description": "Learn the building blocks of the web.",
        "content": "HTML structures page content using elements like headings, paragraphs, links, forms, and semantic containers.",
        "category": "HTML",
    },
    {
        "id": 1006,
        "title": "CSS Basics",
        "description": "Style and layout essentials for modern webpages.",
        "content": "CSS controls colors, spacing, typography, layout, and responsiveness to make pages visually appealing.",
        "category": "CSS",
    },
    {
        "id": 1007,
        "title": "JavaScript Basics",
        "description": "The foundation of dynamic client-side behavior.",
        "content": "JavaScript handles interactions, DOM updates, events, and logic that makes web pages dynamic and responsive.",
        "category": "JavaScript",
    },
    {
        "id": 1008,
        "title": "React Components",
        "description": "Build reusable UI with modern component design.",
        "content": "React components encapsulate UI logic and structure into reusable pieces that update efficiently with state.",
        "category": "React",
    },
]


class Command(BaseCommand):
    help = "Seed the database with stable StudyNest notes"

    def handle(self, *args, **options):
        created_count = 0
        updated_count = 0

        for item in SEED_DATA:
            note, created = Note.objects.update_or_create(
                id=item["id"],
                defaults={
                    "title": item["title"],
                    "description": item["description"],
                    "content": item["content"],
                    "category": item["category"],
                },
            )
            if created:
                created_count += 1
            else:
                updated_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Seed complete: {created_count} created, {updated_count} updated."
            )
        )
