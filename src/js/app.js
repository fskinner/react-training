import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login.js';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="app" style={{display:'block'}}>Home</Link>
        <Link to="login" style={{display:'block'}}>Login</Link>

        {/* this is the importTant part */}
        <RouteHandler/>
      </div>
    );
  }
}

let routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, (Handler) => {  
  React.render(<Handler/>, document.getElementById('app-container'));
});