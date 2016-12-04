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
      backgroundImage: "url('https://wallpaperscraft.com/image/tesla_model_s_tesla_model_s_gray_79777_3840x2160.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '82vh'
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
              <a>Lokaverkefni | Tesla Model S</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight style={navStyle}>
            <LinkContainer to={{pathname:'/home'}}>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname:'/about'}}>
              <NavItem eventKey={2}>About Me</NavItem>
            </LinkContainer>
            <LinkContainer to={{pathname:'/blog'}}>
              <NavItem eventKey={3}>Blog</NavItem>
            </LinkContainer>
            <NavItem eventKey={4}><Button id="buttonInteraction" style={buttonStyle}>Change Color</Button></NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
});

export default Header;
