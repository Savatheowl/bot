import asyncio
from pathlib import Path

from flask import Flask, jsonify, render_template, request

from src.config import Config
from src.database import init_db
import random

app = Flask(
    import_name=__name__,
    template_folder=Path("../templates"),
    static_folder=Path("../static"),
)
app.config.from_object(Config)
app.config["SECRET_KEY"] = Config.SECRET_KEY
app.config["DEBUG"] = Config.DEBUG
app.json.ensure_ascii = False

# user_routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/faq")
def faq():
    return render_template("faq.html")

@app.route("/errors")
def errors():
    return render_template("errors.html")

@app.route("/profile")
def profile():
    return render_template("profile.html")


# panel_routes
@app.route("/panel")
def panel_main_page():
    return render_template("panel/panel_index.html")



def app_run() -> None:
    app.run(debug=True)


if __name__ == "__main__":
    init_db()
    app_run()
