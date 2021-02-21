import React,{Component} from 'react';
 import { withRouter } from 'react-router';
 import {Link} from 'react-router-dom'
import './index.css';

import dldomoticaLogo from '../../img/logo_blanco.png';
import dldomoticaLogoBlack from '../../img/logotipo_black.png';
 import AuthenticationService from '../../AuthenticationService';

class HeaderComponent extends Component{
   render(){

       return(

           <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg navbar-color ">
            <Link to="/">
                    <img alt="logo" className="dylproject-logo"src={dldomoticaLogo}></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="burger-icon navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                 {/* <li className="nav-item active">
                    <a className="nav-link menu-option" href="#">Productos <span className="sr-only">(current)</span></a>
                </li> */}
                 <li className="nav-item">
                     <Link className="menu-option nav-link" to="/">Home</Link>
                </li> 
                <li className="nav-item">
                    <a className="nav-link menu-option" href="#">Servicios</a>
                </li> 
                <li className="nav-item">
                     <Link className="menu-option nav-link" to="/contact">Contacto</Link>
                </li> 
                </ul>
            </div>
         </nav>
       )
   }
}

export default withRouter(HeaderComponent);