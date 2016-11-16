import React from 'react'
import { Col } from 'react-bootstrap'

var Footer = React.createClass({
	render: function() {
		var footerStyle = {
			background: '#3d3d3d',
			height: '100px',
			paddingTop: '20px'
		};

		var rightText = {
			float: 'right',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontSize: '16px',
			color: 'white'
		}

		var icon = {
			fontSize: '14px',
			color: '#aaa'
		}

		var footerText = {
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontSize: '16px',
			color: 'white',
			float: 'left'
		}

		return (
			<footer style={footerStyle}>
				<Col lg={12}>
					<Col lg={4}>
						<p style={footerText}>© Hjörtur Freyr Lárusson</p>
					</Col>
					<Col lg={4}>
						<a href="https://github.com/Hjortur17" style={icon}>GitHub</a>
					</Col>
					<Col lg={4}>
						<p style={rightText}>VFOR2AN05</p>
					</Col>
				</Col>
			</footer>
		);
	}
});

export default Footer;
