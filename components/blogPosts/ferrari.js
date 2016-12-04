import React from 'react'
import Header from '../blogPosts/Ferrari/Header'
import Breadcrumbs from '../blogPosts/Ferrari/Breadcrumbs'
import Section from '../blogPosts/Ferrari/Section'
import Footer from '../blogPosts/Ferrari/Footer'

var Ferrari = React.createClass({
	render: function() {
		return (
			<div>
        <Header />
        <Breadcrumbs />
        <Section />
				<Footer />
      </div>
		);
	}
});

export default Ferrari;
