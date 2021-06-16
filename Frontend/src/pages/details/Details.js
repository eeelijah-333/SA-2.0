import './Details.css';
import { Link } from "react-router-dom";
import React from 'react';



function Details() {
    return (
        
        
        <div className="watchlist-view">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        
                        <Link className="btn btn-primary mt-2" to="/">Watchlist</Link>
                        <p>This is Detailed ViewPoint</p>
                        

                    </div>
                </div>
            </div>

        </div>



    );
}

export default Details;
