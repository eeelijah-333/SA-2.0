from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import yfinance as yf
import requests
import json



 
def searchv2(name):
 url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete"
 
 headers = {
 'x-rapidapi-key': "258783ed5dmsh17db757ccde49d7p1385f6jsn0cded8be272d",
 'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
 }
 querystring = {"q": name, "region": "US"}
 response = requests.request("GET", url, headers=headers, params=querystring)
 return (jsonify(response.json()['quotes']))
 
def details(stocklist):
 url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes"
 
 headers = {
 'x-rapidapi-key': "2b7d915395msh868aa4f558f6aabp1fdb73jsnb8de1ef45c96",
 'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
 }
 querystring = {"region":"US","symbols":stocklist}
 response = requests.request("GET", url, headers=headers, params=querystring)
 return(jsonify((response.json()['quoteResponse']['result'])))


 
app = Flask(__name__)
 
CORS(app)
 
@app.route('/')
def home():
 return "HELLO this is homepage"
 
# URL/<ANY TICKER> will give you the info for any onw stock you want 
 
@app.route('/<name>')
def detail(name):
 return(details(name))
 
# URL/search/<TICKER> will give all stocks similar to your input search 
@app.route('/search/<filter>')
def search(filter):
 return(searchv2(filter))
 
if __name__ == "__main__":
 app.run(host="0.0.0.0")
 app.run(debug=True)


 
# from flask import Flask, jsonify
# from flask_cors import CORS
# import pandas as pd
# import numpy as np
# import yfinance as yf


# def get_details(ticker):
#     symbol = yf.Ticker(ticker)
#     name = symbol.info['shortName']
#     open = symbol.history(period='1d').iloc[0, 0]
#     high = symbol.history(period='1d').iloc[0, 1]
#     low = symbol.history(period='1d').iloc[0, 2]
#     close = symbol.history(period='1d').iloc[0, 3]
#     volume = symbol.history(period='1d').iloc[0, 4]
#     marketcap = symbol.info['marketCap']
#     PE = symbol.info['priceToSalesTrailing12Months']
#     logo = symbol.info['logo_url']

#     stock_dict = {
#         'Name': name,
#         'Symbol': str(ticker),
#         'Open': str(open),
#         'High': str(high),
#         'Low': str(low),
#         'Close': str(close),
#         'Volume': str(volume),
#         'Marketcap': str(marketcap),
#         'PE': str(PE),
#         'Logo': logo}

#     return stock_dict


# app = Flask(__name__)

# CORS(app)


# @app.route('/')
# def home():
#     return "HELLO this is homepage"

# # URL/<ANY TICKER> will give you the info for any onw stock you want 

# @app.route('/<name>')
# def json_convert(name):
#     stock_dict = get_details(name)
#     return jsonify(stock_dict)

# # URL/stocks will give you the info for all 5 stocks we need for the project 

# @app.route('/stocks')
# def json_list_maker():
#     json_list = []
#     for stock in ['AAPL','AMZN', 'EQIX', 'TSLA', 'WMT']:
#         json_list.append((get_details(stock)))
#     return jsonify(json_list)


# if __name__ == "__main__":
#     app.run()
