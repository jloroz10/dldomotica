import React,{Component} from 'react';
import './index.css';
import facebookLogo from '../../img/face.png';
import whatsappLogo from '../../img/whats.png';
import instagramLogo from '../../img/insta.png';
import webLogo from '../../img/www.png';
class Contact extends Component{

    render(){
        return(
           
            <div className="container">
     
                <div className="contacto-area">
                    <h1>
                        Contacto
                    </h1>
                    <div className="contacto-renglon">
                        <img alt="logo" className="contacto-logo"src={whatsappLogo}></img>
                        <span className="contacto-detalle">3329283341</span>
                    </div>
                    <div className="contacto-renglon">
                        <img alt="logo" className="contacto-logo"src={webLogo}></img>
                        <span className="contacto-detalle">dldomotica.com</span>
                    </div>
                    <div className="contacto-renglon">
                        <img alt="logo" className="contacto-logo"src={facebookLogo}></img>
                        <span className="contacto-detalle">dldomotica</span>
                    </div>
                    <div className="contacto-renglon">
                        <img alt="logo" className="contacto-logo"src={instagramLogo}></img>
                        <span className="contacto-detalle">dldomotica</span>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default Contact;