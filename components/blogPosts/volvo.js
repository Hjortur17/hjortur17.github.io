import React from 'react'
import Header from '../blogPosts/Volvo/Header'
import Breadcrumbs from '../blogPosts/Volvo/Breadcrumbs'
import Section from '../blogPosts/Volvo/Section'
import Footer from '../blogPosts/Volvo/Footer'

var Volvo = React.createClass({
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

export default Volvo;
