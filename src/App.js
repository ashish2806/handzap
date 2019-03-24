import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route,Switch,withRouter,Redirect } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Album from './containers/Album/Album';
import Logout from './containers/Logout/Logout';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="App">
        <div>
        <Layout>
        <Switch>
            
            <Route path="/index" component={Auth} />
            <Route path="/albums" exact component={Album} />
            <Route path="/logout" exact component={Logout} />
            <Redirect to ="/index" />
          </Switch>
        </Layout>
      </div>
      </div>
    );
  }
}

const mapstatesToProps = state =>{
  return{
    isAuthenticate : state.auth.token !== null
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onTryAutoSignup : () =>dispatch(actions.authCheckState() )
  }
}

export default withRouter(connect(mapstatesToProps, mapDispatchToProps)(App));
