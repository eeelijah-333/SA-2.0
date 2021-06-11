
import './App.css';

import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Date from './Date';
import JSONDATA from './MOCK_DATA.json'


const App = () => {
   const rowData = [
       {Symbol: "EQUIX", Company: "Equinix", Price: '$' + 822.99},
       {Symbol: "AMZN", Company: "Amazon", Price: '$' +  3349.65},
       {Symbol: "WMNT", Company: "Walmart", Price: '$' + 126.11},
       {Symbol: "TSLA", Company: "Tesla", Price: '$' + 610.12},
       {Symbol: "AAPL", Company: "Apple", Price: '$' + 126.11}
   ];
   return (
       <div className="ag-theme-alpine" style={{
         height: 500, width: 600}}>
            <div>
              <Date></Date>
              <input type="text" placeholder="Search.."></input>
              
            </div>
           <AgGridReact
               rowData={rowData}>
               <AgGridColumn field="Symbol"></AgGridColumn>
               <AgGridColumn field="Company"></AgGridColumn>
               <AgGridColumn field="Price"></AgGridColumn>
           </AgGridReact>
       </div>
   );
};
function Search() {
    return (
      <div className="Search">
        {/* <Stock></Stock> */}
  
      
        
        <input type = "text" placeholder="Search Stock..." />
  
  
        {JSONDATA.map((val, key)=> {
          return <div> {val.Name}</div>
        })}
      </div>
  
  
    );
  }

render(<App />, document.getElementById('root'));
export default App;
