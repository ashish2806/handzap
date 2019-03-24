import React, {Component } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import  classes from './NavigationItems.css';
import Aux from '../../../hoc/_Aux/_Aux';
//import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class NavaigationItems extends Component{
    

    render(){
        console.log(this.props.view_album + "vieew_");
        let Nav=null;   
             
                 Nav = <Aux>
                     {this.props.authenticate ? <NavigationItem link="/index">Home</NavigationItem>
                :null}
                 {this.props.authenticate ? <NavigationItem link="/albums">View Album</NavigationItem>
                :null}
                 
               {(this.props.authenticate && !this.props.view_album) ? <NavigationItem link="/logout">LOGOUT</NavigationItem>
                :null }
                </Aux>;
             
        return(
            <ul className="NavaigationItems">
                {Nav}
           </ul>
        )
    }
}

const MapStateToProps = state => {
    return{
        view_album : state.auth.view_album 
    };
};
export default connect(MapStateToProps)(NavaigationItems);

