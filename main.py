from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Ilm Saroyi API")

# CORS setup for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Course(BaseModel):
    id: int
    title: str
    price: str

@app.get("/api/health")
async def health():
    return {"status": "ok", "message": "Ilm Saroyi FastAPI is running"}

@app.get("/api/courses", response_model=List[Course])
async def get_courses():
    return [
        {"id": 1, "title": "IT kurslari", "price": "500,000 so'm"},
        {"id": 2, "title": "Ingliz tili", "price": "400,000 so'm"},
        {"id": 3, "title": "Koreys tili", "price": "450,000 so'm"},
        {"id": 4, "title": "Matematika", "price": "350,000 so'm"},
    ]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
