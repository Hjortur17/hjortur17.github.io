import React from 'react'
import { Col } from 'react-bootstrap'

var AboutUs = React.createClass({
	render: function() {
		var AboutUsSection = {
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
			color: '#F76663',
			textTransform: 'uppercase'
		}

		var aboutCol = {
			textAlign: 'center',
			fontSize: '18px',
			color: '#333'
		}

		return (
			<section style={AboutUsSection}>
					<Col lg={12}>
						<h1 className="colorInteraction" style={sectionHeader}>Fun facts</h1>
						<Col lg={6}>
							<h2 className="colorInteraction" style={headerKicker}>Comment &amp; Share</h2>
							<p style={aboutCol}>Our comment system allow you (the user) to comment on all blog post and tell other user how to like that post</p>
						</Col>
						<Col lg={6}>
							<h2 className="colorInteraction" style={headerKicker}>User interaction</h2>
							<p style={aboutCol}>We give you some controll of the site but not all. Example you can change the color of the headers if like some other color than red.</p>
						</Col>
					</Col>
			</section>
		);
	}
});

export default AboutUs;
