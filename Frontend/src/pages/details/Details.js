import './Details.css';
import { Link } from "react-router-dom";

function Details() {
    return (
        <div className="watchlist-view">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        {/* <Link className="btn btn-primary mt-2" to="/">Go back</Link> */}
                        <p>This is Detailed View</p>
                        
                        <div class="card">
                        <div class="button-body">
                            <Link to="/">Go back</Link>
                            <button type="button" class="btn btn-primary btn-sm" id="add-button">Add +</button>
                            <button type="button" class="btn btn-primary btn-sm" id="remove-button">Remove -</button>


                        </div>
                        {/* <img src="..." class="card-img-top" alt="..."/> */}
                        
                            <div class="card-body">
                                <h5 class="card-title">AAPL</h5>
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

export default Details;
