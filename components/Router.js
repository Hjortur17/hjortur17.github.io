import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

// Import main sites
import App from './App'
import Home from './Home'
import About from './AboutMe'
import Blog from './Blog'

// Import blog sites
import NissanGTR from './blogPosts/gtr'
import Volvo from './blogPosts/volvo'
import Tesla from './blogPosts/tesla'
import BenzAMG from './blogPosts/amg'
import Ferrari from './blogPosts/ferrari'

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
				<Route path="/blog/" component={App}>
					<Route path="/Blog/Posts/NissanGTR" component={NissanGTR} />
					<Route path="/Blog/Posts/VolvoXC90" component={Volvo} />
					<Route path="/Blog/Posts/TeslaModelS" component={Tesla} />
					<Route path="/Blog/Posts/BenzAMGGT" component={BenzAMG} />
					<Route path="/Blog/Posts/FerrariF12" component={Ferrari} />
				</Route>
      </Router>
		);
	}
});

export default Routerr;
