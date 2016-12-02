import React from 'react'
import Header from './aboutPage/Header'
import Breadcrumbs from './aboutPage/Breadcrumbs'
import AboutMe from './aboutPage/AboutMe'
import Footer from './aboutPage/Footer'

var About = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Breadcrumbs />
        <AboutMe />
        <Footer />
      </div>
    );
  }
});

export default About;
