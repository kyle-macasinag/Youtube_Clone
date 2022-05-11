from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import CommentSerializer, Comments, Reply
from .models import Comments, Reply


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, pk):
    if request.method == "GET":
        comment = Comments.objects.filter(video_id=pk)
        serializer = CommentSerializer(comment, many=True)
        return Response(serializer.data)

