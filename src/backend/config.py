from datetime import timedelta

class Config:
    SECRET_KEY = 'your-secret-key'  # Change this to a secure secret key
    SQLALCHEMY_DATABASE_URI = 'postgresql://username:password@localhost:5432/dbname'  # Update with your PostgreSQL credentials
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'jwt-secret-key'  # Change this to a secure JWT secret key
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
