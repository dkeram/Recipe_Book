from django.shortcuts import render
from rest_framework import generics
from .models import Recipes
from .serializers import RecipesSerializer

# Create your views here.


class RecipeListCreateView(generics.ListCreateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
    
    
class RecipeRetriveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
