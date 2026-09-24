from rest_framework import viewsets, filters
from .models import Note
from .serializers import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by("id")
    serializer_class = NoteSerializer
    lookup_field = "id"
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["title", "category", "description"]
    ordering_fields = ["id", "title", "category", "created_at"]
    ordering = ["id"]
