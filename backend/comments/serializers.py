from rest_framework import serializers
from .models import Comments, Reply

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['user','video_id','text','likes','dislikes']


class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['user','comment','text']
