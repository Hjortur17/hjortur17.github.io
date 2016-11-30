import React from 'react'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import $ from 'jquery'

var Header = React.createClass({
  componentDidMount: function() {
		$('#buttonInteraction').click(function(){
	    $('.colorInteraction').css("color", "#333");
	  });
	},

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

    var navStyle = {
      marginTop: '20px'
    }

    var buttonStyle = {
      marginTop: '-5px',
      marginBottom: '5px'
    }

    return (
      <header style={headerStyle}>
        <Navbar>
          <Navbar.Header style={navStyle}>
            <Navbar.Brand>
              <a href="#">Hjörtur Freyr | Lokaverkefni</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight style={navStyle}>
            <LinkContainer to={{pathname:'/about'}}>
              <NavItem eventKey={1}>About Me</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname:'/blog'}}>
              <NavItem eventKey={2}>Blog</NavItem>
            </LinkContainer>
            <NavItem eventKey={3}><Button id="buttonInteraction" style={buttonStyle}>User interaction</Button></NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
});

export default Header;
