import React from 'react'

var Header = React.createClass({
  render: function() {
    var headerStyle = {
      background: 'url(./img/headerWallpaper.jpg)',
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
