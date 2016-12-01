import React from 'react'
import Header from './aboutPage/Header'
import Breadcrumbs from './aboutPage/Breadcrumbs'
import AboutMe from './aboutPage/AboutMe'

var About = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Breadcrumbs />
        <AboutMe />
      </div>
    );
  }
});

export default About;
