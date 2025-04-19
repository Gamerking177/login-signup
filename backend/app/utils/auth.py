import bcrypt
import jwt
from datetime import datetime, timedelta
from app.config import SECRET_KEY, ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_DAYS


# Password hashing
def hash_password(password: str) -> bytes:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

# Password verification
def verify_password(plain_password: str, hashed_password: bytes) -> bool:
    return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password)

# Create JWT with expiry
def create_jwt(payload: dict, expires_delta: timedelta):
    print("Creating JWT for:", payload)
    print("Expire at:", datetime.utcnow() + expires_delta)
    to_encode = payload.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm="HS256")

# Generate Access & Refresh Tokens
def generate_tokens(user: dict):
    access_payload = {
        "id": str(user["_id"]), 
        "email": user["email"],
        "name": user["name"],
        "type": "access"
    }

    refresh_payload = {
        "id": str(user["_id"]),
        "type": "refresh"
    }

    access_token = create_jwt(
        access_payload, timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    refresh_token = create_jwt(
        refresh_payload, timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    )

    return {
        "access_token": access_token,
        "refresh_token": refresh_token
    }
