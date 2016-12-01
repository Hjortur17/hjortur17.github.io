import React from 'react'
import { Col } from 'react-bootstrap'

var AboutMe = React.createClass({
  render: function() {
    var sectionHeader = {
			marginTop: '0',
			marginBottom: '60px',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#F76663',
			fontSize: '62px'
		}

    var imageStyle = {
      height: '450px',
      width: 'auto',
      float: 'left'
    }

    var textStyle = {
      float: 'float',
      textAlign: 'justify',
      fontSize: '20px',
      paddingLeft: '40px',
      paddingRight: '120px'
    }

    return (
      <section>
        <Col lg={12}>
          <h1 className="colorInteraction" style={sectionHeader}>About Me</h1>
          <Col lg={4}>
            <img style={imageStyle}src='http://www.grindavik.is/img/2014/vinnuskolamyndir/Hjortur.jpg' />
          </Col>
          <Col lg={8}>
            <p style={textStyle}>Hi, I’m Hjörtur Freyr. I’m a web designer and front-end developer based in Grindavík. I have passion for creating stunning websites with rock-solid code and learning new technologies and integrate them into something usable.</p>
          </Col>
        </Col>
      </section>
    );
  }
});

export default AboutMe;
