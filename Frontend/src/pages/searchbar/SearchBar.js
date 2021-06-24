import React from 'react';
import { Link } from "react-router-dom";
import StockItems from '../Stocklist'


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      dropdownEnabled: false,
      stockListItems: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {

    if (e.target.value.length > 2) {

      // this.setState({
      //   dropdownEnabled: true,
      //    stockDetails: result
      // })
        

      let apiURL = "http://127.0.0.1:5000/search/"+e.target.value;
      console.log(apiURL);
      fetch(apiURL)
        .then(res => res.json())
        .then(
          (result) => {
              console.log(JSON.stringify(result));
              this.setState({
                  stockListItems: result[0],
                  dropdownEnabled: true
                  

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
    
    else {
        this.setState({
          dropdownEnabled: false
        })
      };

    }
    render() {
      return (
        <div className="search-bar">
          <input type="text" id="search-input" onChange={this.handleOnChange} placeholder="Search..." />
          {
            this.state.dropdownEnabled ?
              <ul>
                {/* <Link to={'/details/' + stockListItems.Symbol} key={stockListItems.Symbol}></Link> */}
                {JSON.stringify(this.state.stockListItems.longname)}
              </ul>
              :
              null
          }
        </div>
      )
    }
}
  export default Searchbar;
