from rest_framework.routers import DefaultRouter
from django.urls import include, path
from .views import NoteViewSet

router = DefaultRouter()
router.register(r"notes", NoteViewSet, basename="notes")

urlpatterns = [
    path("", include(router.urls)),
]
