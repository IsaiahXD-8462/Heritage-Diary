from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Diary
from .serializers import DiarySerializer
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def diary_list(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'GET':
        diary = Diary.objects.all()
        serializer = DiarySerializer(diary, many=True)        
        medical_param = request.query_params.get('status_conditions')
        story_param = request.query_params.get('life_experience')
        sort_param = request.query_params.get('sort')
        if medical_param:
            diary = diary.filter(status_conditions__Diagnosis=medical_param)
            serializer = DiarySerializer(diary, many=True)
        if story_param:
            diary = diary.filter(life_experience__place_of_birth=story_param)
            diary = diary.filter(life_experience__education=story_param)
            diary = diary.filter(life_experience__number_of_siblings=story_param)
            diary = diary.filter(life_experience__number_of_children=story_param)
            diary = diary.filter(life_experience__number_of_grandchildren=story_param)
            diary = diary.filter(life_experience__biography=story_param)
            serializer = DiarySerializer(diary, many=True)                     
        if sort_param:
            diary = diary.order_by(sort_param)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DiarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@permission_classes([IsAuthenticated])   
def diary_detail(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    diary = get_object_or_404(Diary, pk=pk)
    if request.method == 'GET':
        serializer = DiarySerializer(diary);
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = DiarySerializer(diary, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'PATCH':
        diary.data = {input}
        serializer = DiarySerializer(diary, data={}, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        diary.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)