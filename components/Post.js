import React from 'react'
import { Col } from 'react-bootstrap'

var Posts = React.createClass({
	render: function() {
		var blogImage = {
			height: '250px',
			width: '280px',
			overflow: 'hidden',
			float: 'left',
			marginLeft: '32px',
			marginRight: '32px'
		}

		var image = {
			height: '250px',
			width: '280px',
			overflow: 'hidden',
			float: 'left',
			marginLeft: '36px',
			marginRight: '22px'
		}

		return (
			<section>
				<Col lg={12}>
					<img style={image} src="img/recentBlog/nissanGTR.jpg" />
					<img style={blogImage} src="img/recentBlog/nissanGTR.jpg" />
					<img style={blogImage} src="img/recentBlog/nissanGTR.jpg" />
					<img style={blogImage} src="img/recentBlog/nissanGTR.jpg" />
				</Col>
			</section>
		);
	}
});

export default Posts;
