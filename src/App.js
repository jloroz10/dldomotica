import logo from './logo.svg';
import './App.css';

import underConstruction from "./img/under_construction.png";
function App() {
  return (
    <div className="App">
        <h1>dldomotica</h1>
       <div>
          <img className="construction" alt="under construction" src={underConstruction}></img>
        </div>
    </div>
  );
}

export default App;
