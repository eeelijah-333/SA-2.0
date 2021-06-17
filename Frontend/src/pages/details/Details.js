import './Details.css';
import { Link, withRouter } from "react-router-dom";
import React from 'react';
import * as EnvConstants from '../Constants';
import * as DummyData from './dummydata';
import Skeleton from 'react-loading-skeleton';


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            stockSymbol: this.props.match.params.stockSymbol,
            stockDetails: {},
            error: false,
            errorMessage: '',
            isInWatchlist: null
        };
        this.addToTheWatchList = this.addToTheWatchList.bind(this);
        this.RemoveFromWatchList = this.RemoveFromWatchList.bind(this);
    }
    componentDidMount() {
        // check if the the stock is in watchlist
        if (localStorage.watchlistSymbols) {
            if (localStorage.watchlistSymbols.includes(this.state.stockSymbol)) {
                this.setState({
                    isInWatchlist: true,
                }, () => {
                    console.log(this.state);
                });
            } else {
                this.setState({
                    isInWatchlist: false,
                });
            }
        }
        else {
            console.error('LocalStorage.watchlistSymbols is empty or not defined');
        }



        // // Use this for dummy data
        // this.setState({
        //     isLoaded: true,
        //     stockDetails: DummyData.applStockData
        // });

        // // use this code for dynamic data
        let apiURL = EnvConstants.BE_URL + '/stock/' + this.state.stockSymbol;
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
    }


    addToTheWatchList() {
        let updatedVal = [];
        updatedVal = localStorage.watchlistSymbols.split(',');
        updatedVal.push(this.state.stockSymbol)
        localStorage.watchlistSymbols = updatedVal.join(`,`);
        this.setState({
            isInWatchlist: true
        });
    }

    RemoveFromWatchList() {
        let symbolsArray = localStorage.watchlistSymbols.split(',');
        let symbolIndex = symbolsArray.indexOf(this.state.stockSymbol);

        if (symbolIndex > -1) {
            symbolsArray.splice(symbolIndex, 1);
        }

        localStorage.watchlistSymbols = symbolsArray.join(',');
        console.log(localStorage.watchlistSymbols);

        this.setState({
            isInWatchlist: false
        });
    }


    render() {
        return (
            <div className="detailes-view">
                <header className="clearfix">
                    <Link className="btn btn-link btn-sm float-left" to="/">  &#x2190; Back</Link>
                    {/* Toggle Add or remove button based on if stock is available in watchlist */}
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

                </header>
                <hr />

                {/* Conditional Rendering loads skeliton if the data is still not received else it will show the table with data                     */}
                {!this.state.isLoaded ?
                    // Loads skeliton while pulling the API response
                    <div>
                        <Skeleton height={52} />
                        <Skeleton height={48} count={5} />
                    </div>

                    :
                    // Loads table when response is received
                    <main>
                        <div className="details-head px-3">
                            <div className='float-left'>
                                <h2 className='float-left'>{this.state.stockDetails.price.symbol}</h2>
                                <h5 className='float-left stock-comp-name'>{this.state.stockDetails.price.shortName}</h5>
                            </div>
                            <div className="float-right">
                                <h2>${this.state.stockDetails.financialData.currentPrice.fmt}</h2>
                            </div>
                        </div>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <th>Recommended Action</th>
                                    <td>{this.state.stockDetails.financialData.recommendationKey}</td>
                                </tr>
                                <tr>
                                    <th>Day Hight</th>
                                    <td>{this.state.stockDetails.price.regularMarketDayHigh.fmt}</td>
                                </tr>
                                <tr>
                                    <th>Day Low</th>
                                    <td>{this.state.stockDetails.price.regularMarketDayLow.fmt}</td>
                                </tr>
                                <tr>
                                    <th>Current Ratio</th>
                                    <td>{this.state.stockDetails.financialData.currentRatio.fmt}</td>
                                </tr>
                                <tr>
                                    <th>Earnings Growth</th>
                                    <td>{this.state.stockDetails.financialData.earningsGrowth.fmt}</td>
                                </tr>
                            </tbody>
                        </table>
                    </main>
                }
            </div>
        );
    }
}

export default withRouter(Details);
