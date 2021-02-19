
import './App.css';

import underConstruction from "./img/under_construction.png";
import logo from "./img/dldomotica_portada.JPG";
function App() {
  return (
    <div className="App">
        <div>
			<img className="logo" alt="logo" src={logo}></img>
		</div>
       <div>
          <img className="construction" alt="under construction" src={underConstruction}></img>
        </div>
    </div>
  );
}

export default App;
