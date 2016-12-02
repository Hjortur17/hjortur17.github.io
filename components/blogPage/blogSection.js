import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

var BlogSection = React.createClass({
  render: function() {
    var sectionHeader = {
			marginTop: '0',
			marginBottom: '40px',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#F76663',
			fontSize: '62px'
		}

    return (
      <section>
        <h1 className="colorInteraction" style={sectionHeader}>Blog</h1>
      </section>
    );
  }
});

export default BlogSection;
