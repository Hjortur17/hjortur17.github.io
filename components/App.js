import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Footer from './Footer'

var App = React.createClass({
  render: function(){
    return (
    	<div>
	    	<Header />
	    	<Footer />
    	</div>
    	);
  }
});

export default App;
