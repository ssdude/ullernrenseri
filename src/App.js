import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Hovedside from './components/Hovedside'



class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Hovedside} />
          </Switch>
      </div>
    );
  }
}

export default App;
