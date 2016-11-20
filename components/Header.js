import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

var Header = React.createClass({
  render: function() {
    var headerStyle = {
      overflow: 'hidden',
      backgroundImage: "url('https://s-media-cache-ak0.pinimg.com/originals/01/61/38/0161382629d723e136f4393271289e19.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh'
    }

    var headerText = {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'white'
    }

    return (
      <header style={headerStyle}>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Hjörtur Freyr | Lokaverkefni</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Um Mig</NavItem>
            <NavItem eventKey={2} href="#">Blog</NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
});

export default Header;
