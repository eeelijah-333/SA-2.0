from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)


@app.route('/')
def home():
    return "HELLO this is homepage"




if __name__ == "__main__":
    app.run()

# @app.route('/stocks')
# def get_stock():
#     return("stock":"stock details")


"AAPL" : {
    
}