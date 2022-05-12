from .models import Reply
from rest_framework import serializers

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'user','comment','text']
    user = serializers.StringRelatedField(read_only=True)
    id = serializers.StringRelatedField(read_only=True)