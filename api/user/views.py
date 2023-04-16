from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status

from user.serializers import CustomUserSerializer
from user.middlewares import required_ts_user


@api_view(['GET'])
@required_ts_user
def user_profile(request, current_user):
    serializer = CustomUserSerializer(current_user)
    response = { 'data': serializer.data }
    return Response(response, status.HTTP_200_OK)

@api_view(['POST'])
def create_user(request):
    data = request.data
    serializer = CustomUserSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        response = { 'success': True, 'data': serializer.data }
    else:
        response = { 'success': False, 'data': serializer.errors }
        return Response(response, status.HTTP_400_BAD_REQUEST)
    return Response(response, status.HTTP_200_OK)
