from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import DATETIME, create_engine, text
from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column

import mysql.connector, os
from mysql.connector import errorcode
from dotenv import load_dotenv

# try:
#     con = mysql.connector.connect(user = "root", password = os.getenv('password'), host='127.0.0.1', port='3306', database='project_database')
#     cursor = con.cursor()
#     cursor.execute(TABLES['employees'])
# except mysql.connector.Error as err:
#   if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
#     print("Something is wrong with your user name or password")
#   elif err.errno == errorcode.ER_BAD_DB_ERROR:
#     print("Database does not exist")
#   else:
#     print(err)
# else:
#   con.close()

load_dotenv()
HOST = "127.0.0.1"
PORT = "3306"
DB_NAME = "project_database"
TABLES = {}
TABLES["employees"] = (
    "CREATE TABLE `employees` ("
    "  `emp_no` int(11) NOT NULL AUTO_INCREMENT,"
    "  `birth_date` date NOT NULL,"
    "  `first_name` varchar(14) NOT NULL,"
    "  `last_name` varchar(16) NOT NULL,"
    "  `gender` enum('M','F') NOT NULL,"
    "  `hire_date` date NOT NULL,"
    "  PRIMARY KEY (`emp_no`)"
    ") ENGINE=InnoDB"
)
class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)

class Adventure(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(256), unique=True, nullable=False)
    date: Mapped[str] = mapped_column(DATETIME)

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+mysqlconnector://{os.getenv('user')}:{os.getenv('password')}@{HOST}:{PORT}/{DB_NAME}"
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/get-adventures")
def home():
    adventures = db.session.execute(text('select * from main'))
    for row in adventures:
        print(row.date)
    return {"response": [row.id, row.name, row.date]}

if __name__ == "__main__":
    app.run(port=8080, debug=True)
