from django.contrib import admin
from django.urls import path
from recipes import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('recipes/', views.RecipeListCreateView.as_view(), name = 'recipe-list-create'),
    path('recipes/<int:pk>', views.RecipeRetriveUpdateDestroyView.as_view(), name = 'recipe-detail'),
]
