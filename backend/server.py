from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import (
    DATETIME,
    create_engine,
    delete,
    text,
    select,
    Integer,
    String,
    insert,
)

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
engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"], echo=True)
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/get-adventures")
def get_adventures():
    adventures = db.session.execute(db.select(Main)).scalars()
    current_adventures = []
    for row in adventures:
        current_adventures.append((row.id, row.name, row.date))
    return {"response": current_adventures}


@app.route("/add-adventures/<adventure_name>", methods=["GET", "POST"])
def add_adventure(adventure_name):
    today = date.today()
    try:
        stmt = insert(Main).values(name=adventure_name, date=today)
        with engine.connect() as conn:
            result = conn.execute(stmt)
            conn.commit()

        return {"status": 200}
    except Exception as error:
        return {"status": str(error)}


@app.route("/remove-adventures/<int:id>", methods=["GET", "POST"])
def remove_adventure(id):
    try:
        delete_stmt = delete(Main).where(Main.id == id)
        with engine.connect() as conn:
            result = conn.execute(delete_stmt)
            conn.commit()
        return {"status": 200}
    except Exception as error:
        return {"status": str(error)}


if __name__ == "__main__":
    app.run(port=8080, debug=True)
