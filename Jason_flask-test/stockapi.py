from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import yfinance as yf


def get_details(ticker):
    symbol = yf.Ticker(ticker)
    name = symbol.info['shortName']
    open = symbol.history(period='1d').iloc[0, 0]
    high = symbol.history(period='1d').iloc[0, 1]
    low = symbol.history(period='1d').iloc[0, 2]
    close = symbol.history(period='1d').iloc[0, 3]
    volume = symbol.history(period='1d').iloc[0, 4]
    marketcap = symbol.info['marketCap']
    PE = symbol.info['priceToSalesTrailing12Months']
    logo = symbol.info['logo_url']

    stock_dict = {
        'Name': name,
        'Symbol': str(ticker),
        'Open': str(open),
        'High': str(high),
        'Low': str(low),
        'Close': str(close),
        'Volume': str(volume),
        'Marketcap': str(marketcap),
        'PE': str(PE),
        'Logo': logo}

    return stock_dict


app = Flask(__name__)

CORS(app)


@app.route('/')
def home():
    return "HELLO this is homepage"

# URL/<ANY TICKER> will give you the info for any onw stock you want 

@app.route('/<name>')
def json_convert(name):
    stock_dict = get_details(name)
    return jsonify(stock_dict)

# URL/stocks will give you the info for all 5 stocks we need for the project 

@app.route('/stocks')
def json_list_maker():
    json_list = []
    for stock in ['EQIX']: #['AAPL','AMZN', 'EQIX', 'TSLA', 'WMT']:
        json_list.append((get_details(stock)))
    return jsonify(json_list)


if __name__ == "__main__":
    app.run()
