import React from 'react'
import { Col } from 'react-bootstrap'

var Footer = React.createClass({
  render: function() {
    var footerHeader = {
      float: 'left',
      textTransform: 'uppercase',
      marginTop: '40px',
      marginLeft: '40px',
      marginBottom: '40px'
    }

    var footerLink = {
      textAlign: 'center',
      textTransform: 'uppercase',
      marginTop: '40px'
    }

    var footerText = {
      float: 'right',
      marginTop: '40px',
      marginRight: '40px',
      marginBottom: '40px'
    }

    return (
      <footer>
        <Col lg={12}>
          <Col lg={4}>
            <p style={footerHeader}><strong>© Hjörtur Freyr</strong></p>
          </Col>
          <Col lg={4}>
            <p style={footerLink}><strong><a href='https://github.com/Hjortur17' target='_blank'>GitHub</a></strong></p>
          </Col>
          <Col lg={4}>
            <p style={footerText}><strong>VFOR2AN05</strong></p>
          </Col>
        </Col>
      </footer>
    );
  }
});

export default Footer;
