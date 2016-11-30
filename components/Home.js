import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Header from './homePage/Header'
import Post from './homePage/Post'
import WhyUs from './homePage/Why'

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Post />
        <WhyUs />
      </div>
    );
  }
});

export default Home;
