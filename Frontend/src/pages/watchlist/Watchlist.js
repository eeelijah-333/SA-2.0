import './Watchlist.css';
import DateTime from './DateTime';
import { Link } from "react-router-dom";
import React from 'react';





class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <div className="watchlist-view">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-8">
              <table class="table table-borderless table-hover">
                  <thead>
                    <tr>
                      <td><td><DateTime/></td></td>
                      <td></td>
                      <td></td>
                      <th class="text-right"> <input type="text" placeholder="Search.."></input> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Symbol</th>
                      <td>Name</td>
                      <td></td>
                      <td class="text-right">Price</td>
                    </tr>
                  </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Watchlist;