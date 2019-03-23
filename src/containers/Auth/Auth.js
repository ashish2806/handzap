import React , { Component } from "react";
import FacebookLogin from 'react-facebook-login';
class Auth extends Component{

    state= {
        isLoggedin:false,
        Name:'',
        email:'',
        userID:'',
        picture:''
    }

    componentClicked = () =>{

    }
    responseFacebook = (response) =>{
        console.log(response);
        this.setState({
            isLoggedin:true,
            name:response.name,
            email:response.email,
            userID:response.userID,
            picture:response.picture.data.url
        })
    }
    render(){
        let fbContent;
        if(this.state.isLoggedin){
            fbContent = (
                <div>
                    <img src={this.state.picture} />
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.email}</h2>
                </div>
            );

        }else{
            fbContent = (
                <FacebookLogin
                appId="379971322842415"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
            );
        }
        return(
            <div>
                    {fbContent}    
            </div>
        )
    }
}

export default Auth;