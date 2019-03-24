import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../_Aux/_Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';




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

               <Toolbar auth={this.props.isAuth}  />
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
export default connect(mapStatetoProps)(Layout);