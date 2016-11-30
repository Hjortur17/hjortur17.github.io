import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Blog from './Blog'

var Routerr = React.createClass({
	render: function() {
		return (
      <Router history={hashHistory}>
        <Route path="/#/" component={App}>
					<Redirect from="/" to="/home" />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/blog" component={Blog} />
				</Route>
      </Router>
		);
	}
});

export default Routerr;
