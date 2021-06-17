import React from "react";
import './Watchlist.css';
import { Link } from "react-router-dom";
import * as EnvConstants from '../Constants';
import StockListItem from '../stock-list-item/StockListItem';
import Skeleton from 'react-loading-skeleton';
import SearchBox from '../search/SearchBox';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      watchlistSymbols: '',
      watchListItems: [],
      date: new Date(),
      error: false,
      errorMessage: ''
    };
  }



  componentDidMount() {

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    // check if the browser supports localstorage
    if (typeof (Storage) !== "undefined") {
      // if localstorage variable is empty set it to default watchlist, if not get the watchlist from localstorage
      console.log('Browser supports localstorage');
      if (!localStorage.watchlistSymbols) {
        localStorage.watchlistSymbols = 'EQIX,AAPL,WMT,TSLA,AMZN';
      }
      this.setState({
        watchlistSymbols: localStorage.watchlistSymbols
      }, () => {
        this.populateWatchlist();
        console.log(this.state);
      });
    } else {
      console.error('Browser doesn\' support localstorage');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  tick() {
    this.setState({
      date: new Date()
    });
  }

  populateWatchlist() {
    let watchlistLocal = this.state.watchlistSymbols;
    // let apiURL = EnvConstants.BE_URL + '/stocks/' + watchlistLocal;
    let apiURL = EnvConstants.BE_URL + '/stocksasdfasdf/' + watchlistLocal;
    fetch(apiURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            watchListItems: result.quoteResponse.result
          });
          console.log(result.quoteResponse.result);
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error: true,
            errorMessage: error
          });
        }
      )
    console.log(watchlistLocal);
  }

  render() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
      <div className="watchlist-view card-1">
        <header>
          <div className="container">
            <div className="row pt-4">
              <div className="col-6">
                <h4>{months[this.state.date.getMonth()] + '-' + this.state.date.getDate() + '    ' + this.state.date.toLocaleTimeString()}</h4>
              </div>
              <div className="col-6">
                <SearchBox></SearchBox>
              </div>
            </div>
          </div>
        </header>
        <hr className="mb-0" />
        {!this.state.isLoaded ?
          <Skeleton height={73} count={5} />
          :
          <main>
            {this.state.watchListItems.map((watchListItem) =>
              <Link to={'/details/' + watchListItem.symbol} key={watchListItem.symbol}>
                <StockListItem stockSymbol={watchListItem.symbol} stockName={watchListItem.shortName} stockPrice={watchListItem.regularMarketPrice}></StockListItem>
              </Link>
            )
            }

          </main>
        }
      </div >
    );
  }
}

export default Watchlist;
