import os

def get_firebase_config():
    config = os.getcwd() + '/' + os.environ.get('FIREBASE_CONFIG')
    return config
