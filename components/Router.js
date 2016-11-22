import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import nissanGTR from './blogPosts/gtr.js'


var myRouter = React.createClass({
	render: function() {
		return (
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/components/blogPosts/nissanGTR" component={nissanGTR}/>
      </Router>
		);
	}
});

export default myRouter;
