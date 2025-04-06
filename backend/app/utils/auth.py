import bcrypt
import jwt
from app.config import SECRET_KEY

def hash_password(password: str) -> bytes:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

def verify_password(plain_password: str, hashed_password: bytes) -> bool:
    return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password)

def create_jwt(payload: dict):
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")
