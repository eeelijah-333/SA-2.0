import './Watchlist.css';
import { Link } from "react-router-dom";
import DateTime from './DateTime';



function Watchlist() {
  return (
    <div className="watchlist-view">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-8">
            {/* <Link className="btn btn-primary mt-2" to="/">Go back</Link> */}

            <div class="card-main">
              <div class="button-body">

              </div>
              {/* <img src="..." class="card-img-top" alt="..."/> */}

              <div class="card-body">
              {/* <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card> */}

                <h5 class="card-title"><DateTime /></h5>

              </div>

              <ul class="list-group list-group">
                <li class="list-group-item"><Link to="/EQIX">EQIX</Link>
                  <p class="card-subtitle mb- text-primary" id="stock-info">$809.97</p>
                </li>

                <li class="list-group-item"><Link to="/AMZN">AMZN</Link>
                              <p class="card-subtitle mb-2 text-primary" id="stock-info">$137.15</p>
                </li>

                <li class="list-group-item"><Link to="/TSLA">TSLA</Link>
                              <p class="card-subtitle mb-2 text-primary" id="stock-info">$604.87</p>
                </li>

                <li class="list-group-item"><Link to="/WMT">WMT</Link>
                              <p class="card-subtitle mb-2 text-primary" id="stock-info">$3,415.25</p>
                </li>

                <li class="list-group-item"><Link to="/APPL">AAPL</Link>
                              <p class="card-subtitle mb-2 text-primary" id="stock-info">$130.15</p>
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







// function Watchlist() {
//   return (
//     <div className="watchlist-view">
//       <div className="container">
//         <div className="row justify-content-md-center">
//           <div className="col-8">
//             {/* <Link className="btn btn-primary mt-2" to="/">Go back</Link> */}


//             <div class="card-main">
//               <div class="button-body">

//               </div>
//               {/* <img src="..." class="card-img-top" alt="..."/> */}

//               <div class="card-body">
//                 <h5 class="card-title"><DateTime /></h5>
//                 <p class="card-subtitle mb-2 "><input type="text" placeholder="Search.."></input></p>
//               </div>

//               <ul class="list-group list-group-flush">
//                 <li class="text text-primary text-sm">AAPL 
//                       <a class= "card-caption mb-2 text-muted">Apple</a>
//                   <p class="text text-primary text-sm" id="stock-info">price</p>
//                 </li>




//                 <li class="text text-primary text-sm">EQIX
//                 <a class= "card-caption mb-2 text-muted">Equinix</a>
//                                 <p class="text text-primary text-sm" id="stock-info">price</p>
//                 </li>


//                 <li class="text text-primary text-sm">WMT
//                 <a class= "card-caption mb-2 text-muted">Walmart</a>
//                                 <p class="text text-primary text-sm" id="stock-info">price</p>
//                 </li>

//                 <li class="text text-primary text-sm">TSLA
//                 <a class= "card-caption mb-2 text-muted">Tesla</a>
//                                 <p class="text text-primary text-sm" id="stock-info">price</p>
//                 </li>

//                 <li class="text text-primary text-sm">AMZN
//                 <a class= "card-caption mb-2 text-muted">Amazon</a>
//                                 <p class="text text-primary text-sm" id="stock-info">price</p>
//                 </li>

//               </ul>

//             </div>

//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Watchlist;






























// import './Watchlist.css';
// import DateTime from './DateTime';
// import { Link } from "react-router-dom";
// import React from 'react';





// class Watchlist extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }


//   render() {

//     return (
//       <div className="watchlist-view">
//         <div className="container">
//           <div className="row justify-content-md-center">
//             <div className="col-8">
//               <table class="table table-borderless table-hover">
//                   <thead>
//                     <tr>
//                       <td><td><DateTime/></td></td>
//                       <td></td>
//                       <td></td>
//                       <th class="text-right"> <input type="text" placeholder="Search.."></input> </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <th>Symbol</th>
//                       <td>Name</td>
//                       <td></td>
//                       <td class="text-right">Price</td>
//                     </tr>
//                     <tr>
//                       <th>Symbol</th>
//                       <td>Name</td>
//                       <td></td>
//                       <td class="text-right">Price</td>
//                     </tr>
//                     <tr>
//                       <th>Symbol</th>
//                       <td>Name</td>
//                       <td></td>
//                       <td class="text-right">Price</td>
//                     </tr>
//                   </tbody>
//               </table>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Watchlist;