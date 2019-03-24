import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route,Switch,withRouter } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import Album from './containers/Album/Album';
import Logout from './containers/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Layout>
        <Switch>
            <Route path="/index" component={Auth} />
            <Route path="/albums" exact component={Album} />
            <Route path="/logout" exact component={Logout} />
          </Switch>
        </Layout>
      </div>
      </div>
    );
  }
}

export default withRouter(App);
