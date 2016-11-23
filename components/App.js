import React from 'react'
import { render } from 'react-dom'

var App = React.createClass({
  render: function(){
    var bodyStyle = {
      margin: '0px'
    }

    return (
    	<div style={bodyStyle}>
        {this.props.children}
    	</div>
    	);
  }
});

export default App;
