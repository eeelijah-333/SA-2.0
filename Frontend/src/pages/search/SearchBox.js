import React from "react";
import './SearchBox.css';
import { Link } from "react-router-dom";
import * as EnvConstants from '../Constants';
import Skeleton from 'react-loading-skeleton';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            suggestions: [],
            error: false,
            errorMessage: '',
            dropdownEnable: false,
            isSearching: false
        };

        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    enableDropdown(valueIn) {
        if (!this.state.isSearching) {
            this.setState({
                dropdownEnable: true,
                isSearching: true
            });
            let apiURL = EnvConstants.BE_URL + '/search/' + valueIn;
            fetch(apiURL)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            suggestions: result.quotes,
                            isSearching: false
                        });
                        console.log(result);
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error: true,
                            errorMessage: error,
                            isSearching: false
                        });
                    }
                )
        }
    }
    disableDropdown() {
        this.setState({
            dropdownEnable: false
        })
    }
    onChangeSearch(e) {
        e.target.value.length > 3 ?
            this.enableDropdown(e.target.value) :
            this.disableDropdown();
    }


    render() {
        return (
            <div className="search-dropdown-wrap">
                <div class="form-group">
                    <input id="searchbox" type="text" class="form-control" aria-describedby="search box" placeholder="Search..." onChange={(e) => this.onChangeSearch(e)} />
                    <div className="search-dropdown">
                        {/* {!this.state.isLoaded ?
                            <Skeleton height={73} count={5} />
                            :
                            <div>
                                {this.state.watchListItems.map((watchListItem) =>
                                    <Link to={'/details/' + watchListItem.symbol} key={watchListItem.symbol}>
                                        <StockListItem stockSymbol={watchListItem.symbol} stockName={watchListItem.shortName} stockPrice={watchListItem.regularMarketPrice}></StockListItem>
                                    </Link>
                                )
                                }
                            </div>
                        } */}
                        {
                            this.state.dropdownEnable ?
                                <div>

                                    {this.state.isLoaded ?
                                        <ul className="suggestion-list">
                                            {this.state.suggestions.map((suggestionItem) =>
                                                < li className="suggestion-item" key={suggestionItem.symbol}>
                                                    <Link to={'/details/' + suggestionItem.symbol} >
                                                        {suggestionItem.symbol + '   ' + suggestionItem.shortname}
                                                    </Link>
                                                </li>
                                            )
                                            }
                                        </ul> :
                                        <ul className="suggestion-list">
                                            <Skeleton height={35} count={5} />
                                        </ul>
                                    }
                                </div> :
                                null
                        }
                    </div>

                </div>
            </div >
        );
    }
}

export default Watchlist;
