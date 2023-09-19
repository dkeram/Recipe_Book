from rest_framework import serializers
from .models import Recipes


class  RecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ['id', 'recipe_name', 'ingredients', 'instructions']