from MySQLdb import IntegrityError
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import DATETIME, create_engine, text, select, Integer, String, insert

import os
from datetime import date
from dotenv import load_dotenv

load_dotenv()
HOST = "127.0.0.1"
PORT = "3306"
DB_NAME = "project_database"


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


class Main(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(256), unique=True, nullable=False)
    date: Mapped[str] = mapped_column(DATETIME)


app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = f"mysql+mysqlconnector://{os.getenv('user')}:{os.getenv('password')}@{HOST}:{PORT}/{DB_NAME}"
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/get-adventures")
def get_adventures():
    adventures = db.session.execute(text("select * from main"))
    for row in adventures:
        print(row.date)
    return {"response": [row.id, row.name, row.date]}


@app.route("/add-adventures/<adventure_name>", methods=["GET", "POST"])
def add_adventure(adventure_name):

    today = date.today()
    try: 
        new_adventure = Main(name=adventure_name, date=today)
        db.session.add(new_adventure)
        db.session.commit()
        return {"status": 200}
    except Exception as error:
        return {"status": str(error)}


@app.route("/edit-adventures/<adventure_name>", methods=["GET", "POST"])
def edit_adventure(adventure_name):
    if request.method == "POST":
      print(adventure_name)
      adventures = db.session.execute(text("select * from main"))
      return f"{adventure_name}"
    adventure = db.get_or_404(Main, adventure_name)
    return adventure


if __name__ == "__main__":
    app.run(port=8080, debug=True)
