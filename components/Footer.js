import React from 'react'
import { Col } from 'react-bootstrap'

var Footer = React.createClass({
	render: function() {
		var footerStyle = {
			backgroundColor: '#3d3d3d',
			height: 'auto',
		}

		var nameStyle = {
			float: 'left',
			fontWeight: 'bold',
			textTransform: 'uppercase'
		}

		var icon = {
			textAlign: 'center'
		}

		var simpleStyle = {
			fontWeight: 'bold',
			fontStyle: 'italic',
			float: 'right'
		}

		return (
			<footer style={footerStyle}>
				<Col lg={12}>
					<Col sm={4}>
						<p style={nameStyle}>© Hjörtur Freyr Lárusson</p>
					</Col>
					<Col sm={4}>
						<a style={icon} href="https://github.com/Hjortur17">GitHub</a>
					</Col>
					<Col sm={4}>
						<p style={simpleStyle}>VFOR2AN05</p>
					</Col>
				</Col>
			</footer>
		);
	}
});

export default Footer;
