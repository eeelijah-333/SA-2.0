import React from "react";

class StockListItem extends React.Component {
    render() {
        return (
            <div className="stock-item clearfix px-3">
                <h2 className="si-symbol float-left"> EQIX</h2>
                <h5 className="si-name float-left py-2">Equinix, Inc (REIT)</h5>
                <p className="si-price float-right">$735.34</p>
            </div>
        );
    }
}

export default StockListItem;
