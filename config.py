import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = '07b4a31aed282295051bedd62e9ebb99'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASE_DIR, 'weather_data.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
