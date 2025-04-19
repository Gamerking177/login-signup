from fastapi import APIRouter, HTTPException, Response
from app.models.user import SignupUser, LoginUser
from app.utils.auth import hash_password, verify_password, create_jwt
from app.config import users_collection
from datetime import timedelta
from fastapi import Response

router = APIRouter()

@router.post("/signup")
async def signup(user: SignupUser, response: Response):
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already exists")

    hashed_pwd = hash_password(user.password)

    # ✅ Insert user into database
    inserted_result = users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_pwd
    })

    # ✅ Fetch the newly inserted user
    new_user = users_collection.find_one({"_id": inserted_result.inserted_id})

    print("New user created:", new_user)

    # ✅ Generate token
    token = create_jwt({
        "user_id": str(new_user["_id"]),
        "name": new_user["name"],
        "email": new_user["email"]
    }, timedelta(minutes=30))

    cookie = response.set_cookie(
        key="token",
        value=token,
        httponly=True,
        max_age=1800,  # 30 minutes
        expires=1800,
        samesite="Lax",
        secure=False
    )

    print("Token generated:", token)

    print("Cookie set:", cookie)

    # ✅ Optionally set token in cookie (if you're using response.set_cookie)
    # response.set_cookie("access_token", token, httponly=True)

    return {
        "message": "User registered successfully",
        "token": token
    }


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
    },
    timedelta(minutes=30))

    return {
        "message": "Login successful",
        "token": token
    }
@router.post("/logout")
async def logout(response: Response):
    response.delete_cookie("token")  # 👈 removes token from browser
    return {"message": "Logged out successfully"}