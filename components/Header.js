import React from 'react'


var Header = React.createClass({
  render: function() {
    var headerStyle = {
      backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/originals/01/61/38/0161382629d723e136f4393271289e19.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh'
    }

    var headerText = {
      marginTop: '0px'
    }

    return (
      <header style={headerStyle}>
        <h1 style={headerText}>Hérna er Header</h1>
      </header>
    );
  }
});

export default Header;
