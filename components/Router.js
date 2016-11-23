import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import Blog from './Blog'
import Home from './Home'

var Routerr = React.createClass({
	render: function() {
		return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
					<Route path="/home" component={Home} />
					<Route path="/blog" component={Blog} />
				</Route>
      </Router>
		);
	}
});

export default Routerr;
