
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Contact from './components/Contact';
import Tutoriales from './components/Tutoriales';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import MainPage from './components/MainPage';
function App() {
  return (
    <div className="App">
     
        
      <BrowserRouter>
     <HeaderComponent/>
     <Switch>
         <Route exact path="/" component={MainPage}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/tutoriales" component={Tutoriales}/>
     </Switch>
     <FooterComponent/>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
