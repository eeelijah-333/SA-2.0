import React from "react";
import './Watchlist.css';
import { Link } from "react-router-dom";
import * as EnvConstants from '../Constants';
import StockListItem from '../stock-list-item/StockListItem';

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      watchlistSymbols: '',
      watchListItems: {},
      error: false,
      errorMessage: ''
    };
  }



  componentDidMount() {
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

  populateWatchlist() {
    let watchlistLocal = this.state.watchlistSymbols;
    let apiURL = EnvConstants.BE_URL + '/stocks/' + watchlistLocal;
    console.log(apiURL);
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
            isLoaded: true,
            error: true,
            errorMessage: error
          });
        }
      )
    console.log(watchlistLocal);
  }

  render() {
    return (
      <div className="watchlist-view card-1">
        <header>
          <div className="container">
            <div className="row pt-4">
              <div className="col-6">
                <h4>May 25</h4>
              </div>
              <div className="col-6">
                <div class="form-group">
                  <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Search..." />
                </div>
              </div>
            </div>
          </div>
        </header>
        <hr className="mb-0" />
        <main>
          
          <Link to='/details/AAPL'>
            <StockListItem stockSymbol="Test" stockName="TestName" stockPrice="testPrice"></StockListItem>
          </Link>
        </main>
      </div >
    );
  }
}

export default Watchlist;
