import './App.css';
import Stock from './Stock' ; 
import JSONDATA from './MOCK_DATA.json'

function App() {
  return (
    <div className="App">
      <Stock></Stock>

    
      
      <input type = "text" placeholder="Search..." />


      {JSONDATA.map((val, key)=> {
        return <div> {val.Name}</div>
      })}
    </div>


  );
}



export default App;
