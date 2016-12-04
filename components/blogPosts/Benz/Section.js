import React from 'react'
import { Col } from 'react-bootstrap'

var Section = React.createClass({
  render: function() {
    var newDiv = {
      marginTop: '70px'
    }

    var marginBottomDiv = {
      marginBottom: '50px'
    }

    var newSectionHeader = {
      textAlign: 'center',
      textTransform: 'uppercase',
      color: '#F76663',
      fontSize: '20px',
      float: 'left;'
    }

    var sectionHeader = {
			marginTop: '40px',
			marginBottom: '60px',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#F76663',
			fontSize: '82px'
		}

    var sectionHeader2 = {
			marginTop: '40px',
			marginBottom: '30px',
			textAlign: 'center',
      textTransform: 'uppercase',
			color: '#F76663',
      fontWeight: '300',
			fontSize: '62px'
		}

    var sectionKicker = {
      textTransform: 'uppercase',
      color: '#F76663',
      fontSize: '20px',
      float: 'left;'
    }

    var sectionText = {
      float: 'left',
      marginTop: '10px',
      fontSize: '17px',
      textAlign: 'justify'
    }

    var sectionText2 = {
      float: 'left',
      marginTop: '10px',
      fontSize: '20px',
      textAlign: 'justify',
      paddingLeft: '10%',
      paddingRight: '10%'
    }

    var imageSplitter = {
      width: '100%',
      height: '40vh',
      overflow: 'hidden',
      backgroundImage: "url('http://mercedes-amg-gt.mercedes-benz.com/en_COM/assets/img/content/highlights/dynamics/highlights_dynamics_02/dynamic_mercedes_amg_gt_2.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }

    var blogImage = {
			height: '350px',
			width: '100%',
			float: 'left',
			marginBottom: '35px'
		}

    return (
      <section>
        <Col lg={12} style={marginBottomDiv}>
          <h1 className="colorInteraction" style={sectionHeader}>Bercedes Benz AMG GT</h1>
          <div style={newDiv}>
          <h4 className="colorInteraction" style={sectionHeader2}>Fun Facts</h4>
            <Col lg={4}>
              <h5 style={newSectionHeader} className="colorInteraction">Handcrafted AMG 4.0L V8 biturbo engine</h5>
              <p style={sectionText}>AMG has developed an entirely new engine for a new era of performance. Generating high output from less displacement, the 503-hp biturbo V8 engine is more responsive yet up to 30% more efficient. Its massive torque reaches its 479 lb-ft peak at just 1,750 rpm, and holds it all the way to 4,750 rpm, for a 3.7-second 0-60 time and instant acceleration at any speed. Yet even with its advanced design and technologies, each AMG engine is still hand-built and signed by its own craftsman.</p>
            </Col>
            <Col lg={4}>
              <h5 style={newSectionHeader} className="colorInteraction">AMG High-performance Braking System</h5>
              <p style={sectionText}>Race-proven compound front rotors are designed to provide excellent heat dissipation and dimensional stability at the extreme temperatures generated in high-performance driving, especially on the track. Enormous 15.4-inch front discs are bolted to aluminum center bowls. Theyre grasped by powerful 6-piston fixed calipers finished with red paint and AMG logos. The one-piece rear discs measure 14.2 inches and fitted with substantially sized red calipers.</p>
            </Col>
            <Col lg={4}>
              <h5 style={newSectionHeader} className="colorInteraction">Lightweight, high-strength construction</h5>
              <p style={sectionText}>The AMG GT S has been shaped by its purpose: pure performance in every dimension. Its light weight, sensuous sculpting and dramatic proportions are a triumphant concert of aerodynamics, aesthetics and attention to detail. Its body is almost entirely composed of aluminum, and its spaceframe weighs just 514 lbs, a class benchmark. Its low center of gravity, low drag and optimal downforce add up to highly rewarding driving dynamics. Its visual rewards need no explanation.</p>
            </Col>
          </div>
        </Col>
        <div style={imageSplitter}></div>
        <Col lg={12}>
          <div style={newDiv}>
            <h1 className="colorInteraction" style={sectionHeader2}>Our review</h1>
            <p style={sectionText2}>Gullwings are no longer part of the design, but the GT is still set to swoop in and snag buyers away from its archnemesis, the Porsche 911. Its three variants all have a 4.0-liter twin-turbo V-8. In the base model—if anything at this level can be called base—the engine makes 456 hp. The GT S adds 47 hp, and in the halo GT R edition, engine revisions give it 577 hp. In our testing, we got a GT S from 0 to 60 mph in 3.0 seconds. We expect the GT R to be even quicker when it debuts in summer 2017.</p>
          </div>
        </Col>
      </section>
    );
  }
});

export default Section;
