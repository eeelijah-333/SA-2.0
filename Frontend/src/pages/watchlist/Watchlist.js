import './Watchlist.css';
// import {Date} from './Date';
import { Link } from "react-router-dom";


function Watchlist() {


  return (
    <div className="watchlist-view">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <table class="table table-border table-hover">
              <thead>
                <tr>
                  <th>
                    {/* <Date/> */}
                  </th>
                  <th></th>
                  <th class="text-right"> <input type="text" placeholder="Search.."></input> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th >symbol</th>
                  <td>Name</td>
                  <td class="text-right">price</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watchlist;
