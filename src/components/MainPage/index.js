import React,{Component} from 'react';
import './index.css';
import underConstruction from "../../img/under_construction.png";
import logo from "../../img/logotipo.png";
import cctv from "../../img/cctv.svg";
import dldomoticaLogoBlack from '../../img/logotipo_black.png';
// import AuthenticationService from '../AuthenticationService.js';
class MainPage extends Component{

    constructor(props){
        super(props);
        this.state={
            username:"jloroz",
            password:"",
            loginSuccess:false,
            loginError:false
        }
    }

    // validateLogin = () =>{
    //     console.log(this.state.username)
    //     console.log(this.state.password)

    //     if((this.state.username ==='jloroz'|| this.state.username ==='danycyl') && this.state.password === '1234'){
    //         // this.setState({loginSuccess:true,loginError:false})
    //         this.props.history.push(`/welcome/${this.state.username}`)
    //         AuthenticationService.registerSuccesfulLogin(this.state.username,this.state.password);
    //     }
    //     else{
    //         console.log("Credentials Not Valid")
    //         this.setState({loginSuccess:false,loginError:true})
    //     }
    // }

    // updateValues = (e) =>{
 
    //      this.setState({
    //             [e.target.name]:e.target.value //to be able to use variables as name of the elemen on the state we need to cover it between []
    //      })
    // }
    render(){
        return(
            // <div className="container">
            //     <div className="loginform d-flex justify-content-center align-items-center">
            //         <div className="login-content  d-flex-row justify-content-center">
            //             <h1 className="login">Login</h1>
            //             {this.state.loginSuccess && <div className="alert alert-success">Login Successfully</div>}
            //             {this.state.loginError && <div className="alert alert-danger">Invalid Credentials</div>}
            //             <label className="login-label">Username:</label>
            //             <input className="input" value ={this.state.username} name="username" type="text" onChange={this.updateValues}/>
            //             <br/>
            //             <label className="login-label">Password:</label>
            //             <input className="input" value={this.state.password} name="password" type="password" onChange={this.updateValues}/>
            //             <br/>
            //             <button className="btn btn-outline-dark mt-3" onClick={this.validateLogin}>Login</button>    
            //         </div>
            //     </div>
            // </div>
            <div className="main-area">
     
                {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="area-img carousel-item active">
                         <img className="imagen d-block w-100" alt="logo" src={dldomoticaLogoBlack}></img>
                    </div>
                    <div className="area-img carousel-item">
                        <div>
                            <img className="imagen d-block w-100" alt="logo" src={dldomoticaLogoBlack}></img>
                        </div>
                    </div>
                    <div className="area-img carousel-item">
                        <img className="imagen d-block w-100" alt="logo" src={dldomoticaLogoBlack}></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
                <div>
                    <img className="construction" alt="under construction" src={underConstruction}></img>
                </div> */}
                {/* <div>
			        <img className="logo" alt="logo" src={logo}></img>
		        </div>
                <div>
                    <img className="construction" alt="under construction" src={underConstruction}></img>
                </div> */}
           
                <div className="dl-area">
                    <div className="dl-center image-area">
                        <img className="construction" alt="under construction" src={cctv}></img>
                    </div>
                    <div className="question-area">
                        <div className="question">Listo para llevar tu hogar al siguiente nivel?</div>
                        {/* <button type="dl-button button" class="btn btn-secondary"> */}
                          
                            <span class="badge dl-button mt-3">
                              <a target="_blank" className="" href="https://wa.me/5213329283341">
                                 Contactanos
                            </a>
                            </span>
                        {/* </button> */}
                    </div>
                </div>
           
            </div>
            
        )
    }
}

export default MainPage;