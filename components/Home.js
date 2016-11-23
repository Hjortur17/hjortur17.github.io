import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './Header'

var Home = React.createClass({
  render: function() {
    return (
      <Header />
    );
  }
});

export default Home;
