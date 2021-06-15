import './Watchlist.css';
import { Link } from "react-router-dom";

function Watchlist() {
  return (
    <div className="watchlist-view">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <p>this is watchlist view</p>
            <Link className="btn btn-primary mt-2" to="/details">Go Detailed View</Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Watchlist;
