import React,{Component} from 'react';
import './index.css';
import facebookLogo from '../../img/facebook.svg';
import whatsappLogo from '../../img/whatsapp.svg';
import instagramLogo from '../../img/instagram.svg';
import webLogo from '../../img/www.png';
class Contact extends Component{

    render(){
        return(
           
            <div className=" main-area">
     
                <div className="contacto-area">
                    <h1>
                        Contacto
                    </h1>
                    <div className="contacto-renglon">
                    <a target="_blank" className="button-details" href="https://wa.me/5213329283341">
                       
                         <img alt="logo" className="contacto-logo"src={whatsappLogo}></img>
                        
                        <span className="contacto-detalle">3329283341</span>
                        </a>
                    </div>
                  
                    <div className="contacto-renglon">
                        <a className="button-details" href="https://www.facebook.com/dldomotica" target="_blank" rel="noopener noreferrer">
                            <img alt="logo" className="contacto-logo"src={facebookLogo}></img>    
                        
                        <span className="contacto-detalle">dldomotica</span>
                        </a>
                    </div>
                    <div className="contacto-renglon">
                       
                        <a className="button-details" href="http://www.instagram.com/dldomotica" target="_blank" rel="noopener noreferrer">
                            <img alt="logo" className="contacto-logo"src={instagramLogo}></img>
                        
                            <span className="contacto-detalle">dldomotica</span>
                        </a>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default Contact;