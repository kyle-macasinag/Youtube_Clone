from .models import Reply
from rest_framework import serializers

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'user','comment','text']
    id = serializers.StringRelatedField(read_only=True)

    