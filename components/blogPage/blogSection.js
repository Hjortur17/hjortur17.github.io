import React from 'react'
import { Breadcrumb, Col } from 'react-bootstrap'
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

		var ColStyle = {
			marginBottom: '20px'
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
      <section>
        <Col lg={12}>
          <h1 className="colorInteraction" style={sectionHeader}>Blog</h1>
          <Col md={3} style={ColStyle}>
              <img style={blogImage} src="http://www.topgear.com/sites/default/files/styles/16x9_1536w/public/images/big-read/header-image/2016/10/ba4d47c89006ad0d42a173ec361cb0e0/li3501158row_5419.jpg?itok=9hN1jLoD.jpg" />
              <LinkContainer to={{pathname:'/Blog/Posts/NissanGTR'}}>
                <a><h3 className="colorInteraction" style={imageKicker}>Nissan GTR</h3></a>
              </LinkContainer>
          </Col>
          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://images.carandbike.com/car-images/gallery/volvo/xc90/exterior/volvo-xc90-forn-side-view.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/VolvoXC90'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>Volvo XC90</h3></a>
            </LinkContainer>
          </Col>
          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://images.car.bauercdn.com/pagefiles/4601/tesla_model_s.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/TeslaModelS'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>Tesla Model S</h3></a>
            </LinkContainer>
          </Col>
          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://st.motortrend.com/uploads/sites/10/2015/09/2016-Porsche-Cayenne-Turbo-S-rear-three-quarter-motion-2.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/PorscheCayenne'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>Porsche Cayenne</h3></a>
            </LinkContainer>
          </Col>

          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://mercedes-amg-gt.mercedes-benz.com/en_COM/assets/img/content/highlights/dynamics/highlights_dynamics_03/dynamic_mercedes_amg_gt_3.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/BenzAMGGT'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>Benz AMG GT</h3></a>
            </LinkContainer>
          </Col>
          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://st.automobilemag.com/uploads/sites/11/2016/08/2016-Audi-RS7-Performance-rear-three-quarter-01.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/AudiRS7'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>Audi RS 7</h3></a>
            </LinkContainer>
          </Col>
          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://o.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/750x422/quality/95/http://www.blogcdn.com/slideshows/images/slides/243/262/2/S2432622/slug/l/01-2014-ferrari-f12-berlinetta-review-1.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/FerrariF12'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>Ferrari F12</h3></a>
            </LinkContainer>
          </Col>
          <Col md={3} style={ColStyle}>
            <img style={blogImage} src="http://f10.m5post.com/forums/attachment.php?attachmentid=665660&d=1332776363.jpg" />
            <LinkContainer to={{pathname:'/Blog/Posts/BMWF10'}}>
              <a><h3 className="colorInteraction" style={imageKicker}>BMW F10</h3></a>
            </LinkContainer>
          </Col>
        </Col>
      </section>
    );
  }
});

export default BlogSection;
