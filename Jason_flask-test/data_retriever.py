import pandas as pd
import numpy as np
import json 


import yfinance as yf 

def get_price (ticker):
    symbol = yf.Ticker(ticker)
    price = symbol.history(period='1d').iloc[0,3]
    name = symbol.info
    return price , name['longName']

def get_details (ticker):
    symbol = yf.Ticker(ticker)
    open = symbol.history(period='1d').iloc[0,0]
    high = symbol.history(period='1d').iloc[0,1]
    low = symbol.history(period='1d').iloc[0,2]
    close = symbol.history(period='1d').iloc[0,3]
    volume = symbol.history(period='1d').iloc[0,4]
    stock_dict = {'Symbol' : ticker , 'Open' : "$" + str(open) , 'High' : "$" + str(high) , 'Low' : "$" + str(low) , 'Close' : "$" + str(close), 'Volume' : "$" + str(volume)}
    js = json.dumps(stock_dict)
    # json_file.write(js)
    # json_file.close()
    return js

def convert_to_json(ticker):
    with open('stockjson.json' , 'r+') as file:
        data = json.load(file)
        data.update(get_details(ticker))
        file.seek(0)
        json.dump(data , file )



convert_to_json('AAPL')

result = json.dump()