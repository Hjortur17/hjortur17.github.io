import React from 'react'
import Header from '../blogPosts/NissanGTR/Header'
import Breadcrumbs from '../blogPosts/NissanGTR/Breadcrumbs'
import Section from '../blogPosts/NissanGTR/Section'
import Footer from '../blogPosts/NissanGTR/Footer'

var NissanGTR = React.createClass({
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

export default NissanGTR;
