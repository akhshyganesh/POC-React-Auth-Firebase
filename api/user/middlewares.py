from rest_framework.response import Response
from api.firebase import validate_token
from user.models import CustomUser

def required_ts_user(view_func):

    def _wrapped_view(request, *args, **kwargs):
        auth_token = request.headers.get('Authorization')
        if auth_token:
            valid, uid = validate_token(auth_token)
            if valid:
                current_user = CustomUser.objects.get(uid=uid)
                if current_user:
                    return view_func(request, current_user, *args, **kwargs)
        return Response('Unauthorized', 401)

    return _wrapped_view