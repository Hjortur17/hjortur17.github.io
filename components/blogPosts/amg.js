import React from 'react'
import Header from '../blogPosts/Benz/Header'
import Breadcrumbs from '../blogPosts/Benz/Breadcrumbs'
import Section from '../blogPosts/Benz/Section'
import Footer from '../blogPosts/Benz/Footer'

var BenzAMG = React.createClass({
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

export default BenzAMG;
