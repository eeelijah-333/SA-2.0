from flask import Flask, redirect, url_for, render_template, json, jsonify
from flask_restful import Resource, Api
import pandas as pd
import numpy as np
import json 
import yfinance as yf 
def get_details (ticker):
    symbol = yf.Ticker(ticker)
    open = symbol.history(period='1d').iloc[0,0]
    high = symbol.history(period='1d').iloc[0,1]
    low = symbol.history(period='1d').iloc[0,2]
    close = symbol.history(period='1d').iloc[0,3]
    volume = symbol.history(period='1d').iloc[0,4]
    stock_dict = {'Symbol' : ticker , 'Open' : "$" + str(open) , 'High' : "$" + str(high) , 'Low' : "$" + str(low) , 'Close' : "$" + str(close), 'Volume' : "$" + str(volume)}
    
    return stock_dict

app = Flask(__name__)


@app.route('/')
def home():
    return "HELLO this is homepage"

@app.route('/<name>')

def json_convert(name):
    stock_dict2 = get_details(name)
    try:
        stocklist = []

        for name,value in stock_dict2.items():
            stocklist.append({name : value})

        return jsonify(json.dumps(stocklist))
    except Exception as e:
        print(str(e))
        return jsonify(str(e)) 
    return f'hello {name}!'






if __name__ == "__main__":
    app.run()

#@app.route('/stocks')
#def get_stock():
   # return("stock":"stock details")
