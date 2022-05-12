from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Reply
from .serializers import ReplySerializer
# Create your views here.


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_replies(request, comment_id):
    reply = Reply.objects.filter(comment= comment_id)
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)