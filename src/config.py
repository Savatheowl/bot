import os

class Config:
    # FLASK_SETTINGS
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your_secret_key")
    DEBUG: bool = os.getenv("DEBUG", "0") == "1"
    
    # DATABASE_SETTINGS
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///database.db")    
    DATABASE_ECHO: bool = os.getenv("DATABASE_ECHO", "0") == "1"

