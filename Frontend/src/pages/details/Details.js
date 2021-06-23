import './Details.css';
import { Link } from "react-router-dom";
import React from 'react';
 

class Details extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // stockSymbol: this.props.match.params.stockSymbol,
        // stockDetails: {},
        // error: false,
        // errorMessage: ''

      };
      

    }


    // addToTheWatchList() {
    //     let updatedVal = [];
    //     // updatedVal = localStorage.watchlistSymbols.split(',');
    //     updatedVal.push(this.state.stockSymbol)
    //     localStorage.watchlistSymbols = updatedVal.join(`,`);
    //     this.setState({
    //         isInWatchlist: true
    //     });
    // }

    // RemoveFromWatchList() {
    //     let symbolsArray = localStorage.watchlistSymbols.split(',');
    //     let symbolIndex = symbolsArray.indexOf(this.state.stockSymbol);

    //     if (symbolIndex > -1) {
    //         symbolsArray.splice(symbolIndex, 1);
    //     }

    //     localStorage.watchlistSymbols = symbolsArray.join(',');
    //     console.log(localStorage.watchlistSymbols);

    //     this.setState({
    //         isInWatchlist: false
    //     });
    // }

  

  
    render() {
      return (
        <div className="watchlist-view">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-8">
                    {/* <Link className="btn btn-primary mt-2" to="/">Go back</Link> */}
                    
                    <div class="card">
                    <div class="button-body">
                        <Link className="btn-"to="/" >Back</Link>
                        
                        {
                        (this.state.isInWatchlist === null) ?
                            null :
                            (this.state.isInWatchlist) ?
                                <div className='float-right'>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={this.RemoveFromWatchList}>- Remove</button>
                                </div> :
                                <div className='float-right'>
                                    <button type="button" className="btn btn-primary btn-sm" onClick={this.addToTheWatchList}>+ Add</button>
                                </div>
                    }

                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                    
                        <div class="card-body">
                            <h5 class="card-title">AAPL</h5>
                            <p class="card-subtitle mb-2 text-muted">Apple Inc.</p>
                        </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Close
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">Buy</p>
                        </li>

                        <li class="list-group-item">High
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">132.55</p>
                        </li>

                             
                        <li class="list-group-item">Low
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">129.64</p>
                        </li>

                        <li class="list-group-item">Marketcap
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">29.57</p>
                        </li>
                            
                        <li class="list-group-item">Open
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">91.7%</p>
                        </li>

                        <li class="list-group-item">PE
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">91.7%</p>
                        </li>

                        <li class="list-group-item">Volume
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">91.7%</p>
                        </li>

                    </ul>
                  
                </div>
                    
                </div>
            </div>
        </div>

     </div>

     </div>


        
      );
    }
  }
  export default Details;




