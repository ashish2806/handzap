import React , { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import classes from './Auth.css';
class Auth extends Component{

  
    state={
        picturr :  ''
    }
    componentClicked = () =>{
        
    }
    componentDidMount(){
        this.props.onviewalbum();
    }
    responseFacebook = (response) =>{
        console.log(response);
        this.props.onAuth(response);
    }
    render(){
        let fbContent;

        if(this.props.isAuthenticate){
            console.log(this.props);
            fbContent = (
                <div className="card">
                
                <img src={this.props.picture.data ? this.props.picture.data.url : this.props.picture } alt={this.props.name} style={{width:"50%"}} />
                <h1>{this.props.name}</h1>
                <h3>{this.props.email}</h3>
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
            <div className="fbData">
                    {fbContent}    
            </div>
        )
    }
}

const mapStatetpProps = state => {
    return{
            loading : state.auth.loading,
            error : state.auth.error,
            isAuthenticate : state.auth.token !== null,
            AuthenticatePath : state.auth.Auth_redirec_path,
            isLoggedin:state.auth.isLoggedin,
            name:state.auth.name,
            email:state.auth.email,
            picture:state.auth.picture,
            userId : state.auth.userId,

            
    }
}

const mapDispatchtoProps = dispatch =>{
    return{
        onAuth : (response) =>dispatch(actions.auth(response)),
        onSetAuthRedirectPath : () =>dispatch(actions.authRedirectPath('/')),
        onviewalbum : () => dispatch(actions.onviewalbum(false))
    }
}
export default connect(mapStatetpProps,mapDispatchtoProps)(Auth);