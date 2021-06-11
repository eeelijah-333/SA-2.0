from flask import Flask, redirect, url_for, render_template, json, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import pandas as pd
import numpy as np
import json
import yfinance as yf


def get_details(ticker):
    symbol = yf.Ticker(ticker)
    open = symbol.history(period='1d').iloc[0, 0]
    high = symbol.history(period='1d').iloc[0, 1]
    low = symbol.history(period='1d').iloc[0, 2]
    close = symbol.history(period='1d').iloc[0, 3]
    volume = symbol.history(period='1d').iloc[0, 4]
    marketcap = symbol.info['marketCap']
    PE = symbol.info['priceToSalesTrailing12Months']

    stock_dict = {
        'Symbol': str(ticker),
        'Open': str(open),
        'High': str(high),
        'Low': str(low),
        'Close': str(close),
        'Volume': str(volume),
        'Marketcap': str(marketcap),
        'P/E': str(PE)}

    return stock_dict


app = Flask(__name__)

CORS(app)


@app.route('/')
def home():
    return "HELLO this is homepage"

# URL/<ANY TICKER> will give you the infor for any stock


@app.route('/<name>')
def json_convert(name):
    stock_dict = json.dumps(get_details(name))
    return stock_dict


if __name__ == "__main__":
    app.run()
