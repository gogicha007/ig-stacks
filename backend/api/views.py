from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

class LoginView(APIView):

    permission_classes = [AllowAny]

    def post(self, request: Request):
        username = request.data.get('username')
        password = request.data.get('password')
        print(username)
        user = authenticate(username=username, password=password)

        if user is not None:

            is_tokened = Token.objects.filter(
                user=user.pk)         # check if user has token
            token = user.auth_token.key if is_tokened else 'none'   # get token

            response = {
                'message': 'Login successful',
                'token': token,
                'username': username,
                'user_id': user.id,
                'name': f'{user.first_name} {user.last_name}',
            }
            return Response(data=response, status=status.HTTP_200_OK)
        return Response(data='Wrong user name!', status=status.HTTP_401_UNAUTHORIZED)

    def get(serlf, request: Request):

        content = {
            'user': str(request.user),
            'auth': str(request.auth),
        }
        return Response(data=content, status=status.HTTP_200_OK)

