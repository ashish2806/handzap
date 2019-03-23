import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Aux from '../_Aux/_Aux';




class Layout extends Component{
    state={
        showSideDrawer:false
    }

    SideDrawerClosedHandler = () =>{
        this.setState({
            showSideDrawer:!this.state.showSideDrawer

        });
    }

    
    render(){
        return(
            <Aux>
            <main>
                {this.props.children}
            </main>
        </Aux>  
        );
    }
}

const mapStatetoProps = state =>{
    return{
        isAuth : state.auth.token !== null
    }
}
export default Layout;