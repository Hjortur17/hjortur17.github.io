import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

var Breadcrumbs = React.createClass({
  render: function() {
    return (
      <Breadcrumb>
        <LinkContainer to={{pathname:'/home'}}>
          <Breadcrumb.Item href="">
            Home
          </Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>
          About Me
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
});

export default Breadcrumbs;
