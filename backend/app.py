import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from database import Base, engine, SessionLocal
from models import Crop
from price_model import predict_price

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Farm Direct AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend"))

class CropInput(BaseModel):
    farmer: str
    crop: str
    quantity: int

@app.get("/status")
def status():
    return {"message": "Farm Direct AI Backend Running"}

@app.post("/predict")
def predict(data: CropInput):
    price = predict_price(data.crop, data.quantity)
    return {
        "fair_price": price,
        "earnings": price * data.quantity
    }

@app.post("/upload")
def upload(data: CropInput):
    db = SessionLocal()

    price = predict_price(data.crop, data.quantity)

    new_crop = Crop(
        farmer=data.farmer,
        crop=data.crop,
        quantity=data.quantity,
        price=price
    )

    db.add(new_crop)
    db.commit()
    db.close()

    return {
        "status": "Uploaded Successfully",
        "price": price
    }

@app.get("/market")
def get_market():
    db = SessionLocal()
    crops = db.query(Crop).all()

    result = []
    for c in crops:
        result.append({
            "farmer": c.farmer,
            "crop": c.crop,
            "quantity": c.quantity,
            "price": c.price
        })

    db.close()
    return result

if os.path.exists(frontend_dir):
    app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="frontend")