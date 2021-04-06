import React,{Component} from 'react';
import './index.css';
import FacebookIcon from "../../img/facebook-icon.png";
import InstagramIcon from "../../img/instagram-icon.png";
import axios from 'axios';



class FooterComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }
    componentDidMount(){
        axios.get('https://api.countapi.xyz/hit/dldomotica.com/visitas')
          .then(res => {
              console.log(res)
              this.setState({counter: res.data.value});
            // const persons = res.data;
            // this.setState({ persons });
          })
      }
    render(){

        return(
            <div className="footer">
            <div className="footer-details">
                <ul className="footer-list">
                    <li className="footer-list-elem"><a href="https://www.facebook.com/dldomotica" target="_blank" rel="noopener noreferrer"><img alt="facebook icon"  className="footer-icon"src={FacebookIcon}></img></a></li>
                    {/* <li className="footer-list-elem"><a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><img alt="twitter icon"  className="footer-icon"src={TwitterIcon}></img></a></li> */}
                    <li className="footer-list-elem"><a href="http://www.instagram.com/dldomotica" target="_blank" rel="noopener noreferrer"><img alt="instagram icon"  className="footer-icon"src={InstagramIcon}></img></a></li>
                    <li className="counter"><span>{this.state.counter}</span></li>
                </ul>
            </div>
            
        </div>
        );
    }
}

export default FooterComponent; 