from rest_framework import serializers
from .models import Comments, Reply

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['user','video_id','text','likes','dislikes']
        depth = 1

class ReplySerializer(serializers.Model):
    class Meta:
        model = Reply
        fields = ['user','comment','text']
        depth = 1