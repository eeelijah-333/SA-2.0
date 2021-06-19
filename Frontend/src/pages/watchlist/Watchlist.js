import './Watchlist.css';
import { Link } from "react-router-dom";
import DateTime from './DateTime';



function Watchlist() {
  return (
    <div className="watchlist-view">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            

            <div class="card-main">
              <div class="button-body">

              </div>
              

              <div class="card-body">
              

                <p class="card-title"><DateTime /></p>
        
              </div>

              <ul class="list-group list-group">
                <li class="list-group-item"><Link to="/details">EQIX</Link>{" "}
                <a class="card-subtitle mb-2 text-muted">Equinx Inc.</a>
                  <p class="card-subtitle text-primary" id="stock-info">$809.97</p>
                </li>

                <li class="list-group-item"><Link to="/details">AMZN</Link>{" "}
                <a class="card-subtitle mb-2 text-muted">Amazon.com, Inc.</a>
                              <p class="card-subtitle  text-primary" id="stock-info">$137.15</p>
                </li>

                <li class="list-group-item"><Link to="/details">TSLA</Link>{" "}
                <a class="card-subtitle mb-2 text-muted">Tesla Inc.</a>
                              <p class="card-subtitle  text-primary" id="stock-info">$604.87</p>
                </li>

                <li class="list-group-item"><Link to="/details">WMT</Link>{" "}
                <a class="card-subtitle mb-2 text-muted">Walmart Inc.</a>
                              <p class="card-subtitle text-primary" id="stock-info">$3,415.25</p>
                </li>

                <li class="list-group-item"><Link to="/details">AAPL</Link>{" "}
                <a class="card-subtitle mb-2 text-muted">Apple Inc.</a>
                              <p class="card-subtitle text-primary" id="stock-info">$130.15</p>
                </li>

              </ul>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Watchlist;







