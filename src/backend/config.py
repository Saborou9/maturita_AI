from datetime import timedelta

class Config:
    SECRET_KEY = '7LwDMc28LWvbvBnkDsJ4f0QDs3V1QIVT'  # Change this to a secure secret key
    SQLALCHEMY_DATABASE_URI = 'postgresql://matuslabaj:jaqca8-gibkyr-mywxYk@localhost/maturita'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'DfKAMFCwWyGoWDvfBdsHDdBKT9aksQVQJU74wFLbtJw'
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
