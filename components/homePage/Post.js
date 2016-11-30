import React from 'react'
import { Col } from 'react-bootstrap'

var Post = React.createClass({
	render: function() {
		var imageSection = {
			marginTop: '80px'
		}

		var ColStyle = {
			marginBottom: '20px'
		}

		var sectionHeader = {
			marginTop: '0',
			marginBottom: '40px',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#F76663',
			fontSize: '62px'
		}

		var blogImage = {
			height: '250px',
			width: '100%',
			float: 'left',
			marginBottom: '15px'
		}

		var imageKicker = {
			textTransform: 'uppercase',
			textAlign: 'center',
			fontSize: '32px',
			color: '#F76663'
		}

		return (
			<section style={imageSection}>
					<Col lg={12}>
						<h1 className="colorInteraction" style={sectionHeader}>Recent Blog Post</h1>
						<Col md={3} style={ColStyle}>
							<a href="./blogPosts/gtr.js"><img style={blogImage} src="http://www.topgear.com/sites/default/files/styles/16x9_1536w/public/images/big-read/header-image/2016/10/ba4d47c89006ad0d42a173ec361cb0e0/li3501158row_5419.jpg?itok=9hN1jLoD.jpg" /></a>
							<a href="./blogPosts/gtr.js"><h3 className="colorInteraction" style={imageKicker}>Nissan GTR</h3></a>
						</Col>
						<Col md={3} style={ColStyle}>
							<a href=""><img style={blogImage} src="http://images.carandbike.com/car-images/gallery/volvo/xc90/exterior/volvo-xc90-forn-side-view.jpg" /></a>
							<a href=""><h3 className="colorInteraction" style={imageKicker}>Volvo XC90</h3></a>
						</Col>
						<Col md={3} style={ColStyle}>
							<a href=""><img style={blogImage} src="http://images.car.bauercdn.com/pagefiles/4601/tesla_model_s.jpg" /></a>
							<a href=""><h3 className="colorInteraction" style={imageKicker}>Tesla Model S</h3></a>
						</Col>
						<Col md={3} style={ColStyle}>
							<a href=""><img style={blogImage} src="http://st.motortrend.com/uploads/sites/10/2015/09/2016-Porsche-Cayenne-Turbo-S-rear-three-quarter-motion-2.jpg" /></a>
							<a href=""><h3 className="colorInteraction" style={imageKicker}>Porsche Cayenne</h3></a>
						</Col>
					</Col>
			</section>
		);
	}
});

export default Post;
