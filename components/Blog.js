import React from 'react'
import Header from './blogPage/Header'
import Breadcrumbs from './blogPage/Breadcrumbs'
import BlogSection from './blogPage/blogSection'
import Footer from './blogPage/Footer'

var Blog = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Breadcrumbs />
        <BlogSection />
        <Footer />
      </div>
    );
  }
});

export default Blog;
