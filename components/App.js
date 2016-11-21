import React from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Posts from './Post'
import Footer from './Footer'

var App = React.createClass({
  render: function(){
    var bodyStyle = {
      margin: '0px'
    }

    return (
    	<div style={bodyStyle}>
	    	<Header />
        <Posts />
        <Footer />
    	</div>
    	);
  }
});

export default App;
