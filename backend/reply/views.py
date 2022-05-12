from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Reply
from .serializers import ReplySerializer
# Create your views here.


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def reply_details(request, comment_id):
    if request.method == "GET":
        reply = Reply.objects.filter(comment=comment_id)
        serializer = ReplySerializer(reply, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        data = request.data
        data['user'] = request.user.id
        serializer = ReplySerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)