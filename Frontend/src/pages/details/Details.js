import './Details.css';
import { Link } from "react-router-dom";
import React from 'react';
import * as EnvConstants from '../Constants';
import Skeleton from 'react-loading-skeleton';

 

class Details extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        stockSymbol: this.props.match.params.stockSymbol,
        stockDetails: {},
        error: false,
        errorMessage: ''
      };
    }

    let apiURL = EnvConstants.MY_APIURL + '/stock/' + this.state.stockSymbol;
    // console.log(apiURL);
    fetch(apiURL)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    stockDetails: result
                });
                console.log(result);
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: true,
                    errorMessage: error
                });
            }
        )


    
    componentDidMount() {
        fetch("http://127.0.0.1:5000/stocks")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },

        }



    
  

  
    render() {
      return (
        <div className="watchlist-view">
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-8">
                    {/* <Link className="btn btn-primary mt-2" to="/">Go back</Link> */}
                    <p>This is Detailed View</p>
                    
                    <div class="card">
                    <div class="button-body">
                        <Link className="btn-"to="/" >Back</Link>
                        <button type="button" class="btn btn-primary btn-sm" id="add-button">Add +</button>
                        <button type="button" class="btn btn-danger btn-sm" id="remove-button">Remove -</button>
                        

                    </div>
                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                    
                        <div class="card-body">
                        <h2 className='float-left'>{this.state.stockDetails.price.symbol}</h2>
                            <p class="card-subtitle mb-2 text-muted">Apple Inc.</p>
                        </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Recommended Action
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">Buy</p>
                        </li>

                        <li class="list-group-item">Day High
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">132.55</p>
                        </li>

                             
                        <li class="list-group-item">Day Low
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">129.64</p>
                        </li>

                        <li class="list-group-item">Current Ratio
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">29.57</p>
                        </li>
                            
                        <li class="list-group-item">Earnings Growth
                            <p class= "card-subtitle mb-2 text-muted" id="stock-info">91.7%</p>
                        </li>

                    </ul>
                  
                </div>
                    
                </div>
            </div>
        </div>

     </div>


        
      );
    }
  }
  export default Details;




