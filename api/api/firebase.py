import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from api.settings import FIREBASE_CONFIG

cred = credentials.Certificate(FIREBASE_CONFIG)
firebase_app = firebase_admin.initialize_app(cred)

def validate_token(id_token):
    uid = None
    try:
        valid_token = auth.verify_id_token(id_token)
    except:
        return False, uid
    uid = valid_token.get('uid')

    return True, uid
