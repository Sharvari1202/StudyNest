from rest_framework.test import APITestCase
from rest_framework import status
from notes.models import Note


class NoteAPITestCase(APITestCase):
    @classmethod
    def setUpTestData(cls):
        cls.seed_data = [
            Note.objects.create(
                id=2001,
                title="Java OOP",
                description="Object-oriented programming in Java.",
                content="Java OOP includes inheritance, polymorphism, and encapsulation.",
                category="Java",
            ),
            Note.objects.create(
                id=2002,
                title="SQL Joins",
                description="Learn relational data joins.",
                content="SQL joins connect tables using foreign keys and matching columns.",
                category="SQL",
            ),
            Note.objects.create(
                id=2003,
                title="React Components",
                description="Reusable UI building blocks.",
                content="React components render dynamic interfaces with props and state.",
                category="React",
            ),
        ]

    def test_get_all_notes(self):
        response = self.client.get("/api/notes/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 3)

    def test_get_note_by_id_1001(self):
        response = self.client.get("/api/notes/2001/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "Java OOP")
        self.assertEqual(response.data["category"], "Java")

    def test_get_note_by_id_1008(self):
        note = Note.objects.create(
            id=2008,
            title="React Components",
            description="Reusable UI building blocks.",
            content="React components render dynamic interfaces with props and state.",
            category="React",
        )
        response = self.client.get(f"/api/notes/{note.id}/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["title"], "React Components")

    def test_get_missing_note(self):
        response = self.client.get("/api/notes/9999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_note(self):
        payload = {
            "id": 3001,
            "title": "CSS Layout",
            "description": "Modern CSS layout patterns.",
            "content": "Use Flexbox and Grid for responsive page structure.",
            "category": "CSS",
        }
        response = self.client.post("/api/notes/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Note.objects.get(id=3001).title, "CSS Layout")

    def test_update_note(self):
        payload = {
            "title": "Updated Java OOP",
            "description": "Updated note description.",
            "content": "Updated content about OOP.",
            "category": "Java",
        }
        response = self.client.put("/api/notes/2001/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Note.objects.get(id=2001).title, "Updated Java OOP")

    def test_delete_note(self):
        note = Note.objects.create(
            id=4001,
            title="Temporary Note",
            description="Temporary track",
            content="Will be removed after deletion test.",
            category="General",
        )
        response = self.client.delete(f"/api/notes/{note.id}/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Note.objects.filter(id=note.id).exists())
