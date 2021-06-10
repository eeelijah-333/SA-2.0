import React from 'react' ;

class Stock extends React.Component{
    componentDidMount(){
        this.fetchStock();
    }
    fetchStock(){
        const API_KEY = '9FDT228BCQUMXDU3'; 
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&outputsize=compact&apikey=${API_KEY}`;

        fetch(API_Call)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data) {
                console.log(data);
            }
        )
    }
    render(){
        return(
            <div>
                <h1>STOCK APP</h1>
                <button>
                    APPLE AAPL
                </button>
                <button>
                    AMAZON AMZN
                </button>
                <button>
                    EQUINIX EQIX
                </button>
                <button>
                    TESLA TSLA
                </button>
                <button>
                    WALMART WMT
                </button>
            </div>
        )
    }
}

export default Stock ;