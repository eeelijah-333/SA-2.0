import React from "react";
import './Watchlist.css';
import { Link } from "react-router-dom";
import StockListItem from '../stock-list-item/StockListItem';

class Watchlist extends React.Component {
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
          <Link to='/details'>
            <StockListItem></StockListItem>
          </Link>
          <Link to='/details'>
            <StockListItem></StockListItem>
          </Link>
        </main>
      </div >
    );
  }
}

export default Watchlist;
