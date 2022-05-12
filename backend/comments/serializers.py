from rest_framework import serializers
from .models import Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'user', 'video_id','text','likes','dislikes']
    user = serializers.StringRelatedField(read_only=True)
    id = serializers.StringRelatedField(read_only=True)
    likes = serializers.IntegerField(read_only=True)
    dislikes = serializers.IntegerField(read_only=True)


