import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route,Switch,withRouter,Redirect } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Album from './containers/Album/Album';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Layout>
        <Switch>
            <Route path="/index" component={Auth} />
            <Route path="/albums" exact component={Album} />
          </Switch>
        </Layout>
      </div>
      </div>
    );
  }
}

export default withRouter(App);
