import React from 'react'
import Header from './homePage/Header'
import Post from './homePage/Post'
import AboutUs from './homePage/About'
import Footer from './homePage/Footer'

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Post />
        <AboutUs />
        <Footer />
      </div>
    );
  }
});

export default Home;
