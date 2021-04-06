import React,{Component} from 'react';
import './index.css';
import facebookLogo from '../../img/facebook.svg';
import whatsappLogo from '../../img/whatsapp.svg';
import instagramLogo from '../../img/instagram.svg';
import webLogo from '../../img/www.png';
import underConstruction from "../../img/seccion-en-construccion.png";
class Tutoriales extends Component{


    render(){

        return(
            
            <div className="tutoriales-main-area">
     
                 <h1 className="titulo">Tutoriales</h1>
                <div className="tutoriales-area">
                    <div className="dl-center construccion-imagen-area">
                        <img className="construccion" alt="under construction" src={underConstruction}></img>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default Tutoriales;