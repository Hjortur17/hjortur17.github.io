import React from 'react'
import Header from '../blogPosts/Tesla/Header'
import Breadcrumbs from '../blogPosts/Tesla/Breadcrumbs'
import Section from '../blogPosts/Tesla/Section'
import Footer from '../blogPosts/Tesla/Footer'

var Tesla = React.createClass({
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

export default Tesla;
