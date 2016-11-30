import React from 'react'
import { Col } from 'react-bootstrap'

var WhyUs = React.createClass({
	render: function() {
		var WhyUsSection = {
			paddingTop: '80px'
		}

		var sectionHeader = {
			marginTop: '0',
			marginBottom: '40px',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#F76663',
			fontSize: '62px'
		}

		var headerKicker = {
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#333'
		}

		var aboutCol = {
			textAlign: 'center',
			fontSize: '18px',
			color: '#333'
		}

		return (
			<section style={WhyUsSection}>
					<Col lg={12}>
						<h1 className="colorInteraction" style={sectionHeader}>Why choose us ?</h1>
						<Col lg={4}>
							<h2 style={headerKicker}>Why Us</h2>
							<p style={aboutCol}>We are trying to make this most poupular blog site, this site should be easy to use and user-freindly. Here can you comment and share with your freinds and you can also interact, you can choose color and more.</p>
						</Col>
						<Col lg={4}>
							<h2 style={headerKicker}>Comment &amp; Share</h2>
							<p style={aboutCol}>Our comment system allow you (the user) to comment on all blog post and tell other user how to like that post</p>
						</Col>
						<Col lg={4}>
							<h2 style={headerKicker}>User interaction</h2>
							<p style={aboutCol}>We give you some controll of the site but not all. Example you can change the color of the headers if like some other color than red.</p>
						</Col>
					</Col>
			</section>
		);
	}
});

export default WhyUs;
