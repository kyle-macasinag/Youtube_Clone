from rest_framework import serializers
from .models import Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'user', 'video_id','text','likes','dislikes']
        depth = 1
    id = serializers.StringRelatedField(read_only=True)


