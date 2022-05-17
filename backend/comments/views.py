from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import CommentSerializer, Comments
from .models import Comments
from django.shortcuts import get_object_or_404

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, vid_id):
    comment = Comments.objects.filter(video_id=vid_id)
    serializer = CommentSerializer(comment, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment(request):
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def update_comment(request, pk):
    comment = get_object_or_404(Comments, pk=pk)
    serializer = CommentSerializer(comment, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save(user=request.user)
    return Response(serializer.data)