from fastapi import APIRouter, HTTPException, Response
from app.models.user import SignupUser, LoginUser
from app.utils.auth import hash_password, verify_password, create_jwt
from app.config import users_collection


router = APIRouter()

@router.post("/signup")
async def signup(user: SignupUser):
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    hashed_pwd = hash_password(user.password)
    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_pwd
    })

    return {"message": "User registered successfully"}

@router.post("/login")
async def login(user: LoginUser):
    existing_user = users_collection.find_one({"email": user.email})
    if not existing_user:
        raise HTTPException(status_code=404, detail="Email not registered")

    if not verify_password(user.password, existing_user["password"]):
        raise HTTPException(status_code=401, detail="Incorrect password")

    token = create_jwt({
        "user_id": str(existing_user["_id"]),
        "email": existing_user["email"]
    })

    return {
        "message": "Login successful",
        "token": token
    }
@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("token")  # 👈 removes token from browser
    return {"message": "Logged out successfully"}