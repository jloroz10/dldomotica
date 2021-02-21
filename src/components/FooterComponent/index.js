import React from 'react';
import './index.css';
import FacebookIcon from "../../img/facebook-icon.png";
import InstagramIcon from "../../img/instagram-icon.png";



function FooterComponent(){
    return(
        <div className="footer">
            <div className="footer-details">
                <ul className="footer-list">
                    <li className="footer-list-elem"><a href="https://www.facebook.com/dldomotica" target="_blank" rel="noopener noreferrer"><img alt="facebook icon"  className="footer-icon"src={FacebookIcon}></img></a></li>
                    {/* <li className="footer-list-elem"><a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><img alt="twitter icon"  className="footer-icon"src={TwitterIcon}></img></a></li> */}
                    <li className="footer-list-elem"><a href="http://www.instagram.com/dldomotica" target="_blank" rel="noopener noreferrer"><img alt="instagram icon"  className="footer-icon"src={InstagramIcon}></img></a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default FooterComponent; 