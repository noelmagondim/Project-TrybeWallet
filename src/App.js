import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  renderRoutes() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={ Login } />
          <Route path="/carteira" exact component={ Wallet } />
        </Switch>
      </main>
    );
  }

  render() {
    return (
      <div>
        {this.renderRoutes()}
      </div>
    );
  }
}

export default App;
