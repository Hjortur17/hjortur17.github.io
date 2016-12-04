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
			marginBottom: '20px',
			textAlign: 'center',
			color: '#F76663',
      fontWeight: '300',
			fontSize: '42px'
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
      marginBottom: '30px',
      fontSize: '20px',
      textAlign: 'center'
    }

    var imageSplitter = {
      width: '100%',
      height: '50vh',
      overflow: 'hidden',
      backgroundImage: "url('http://cdn.pinthiscars.com/images/ferrari-f12-white-wallpaper-wallpaper-2.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      marginBottom: '30px'
    }

    return (
      <section>
        <Col lg={12} style={marginBottomDiv}>
          <h1 className="colorInteraction" style={sectionHeader}>Ferrari F12</h1>
          <div>
            <Col lg={4}>
              <h5 style={sectionKicker} className="colorInteraction">The Heart of the Legend</h5>
              <p style={sectionText}>Maximum power is 740CV for a specific output of 118CV per litre and 690 Nm of torque. 80 per cent of that torque figure is on tap from 2500 rpm, giving massive acceleration right the way up to the 8700 rpm red line. Just like Ferraris F1 engines, the V12 boasts very low levels of inertia to ensure that the engine revs rapidly. Development concentrated on a number of areas, including the compression ratio which has been increased to 13.5:1.</p>
            </Col>
            <Col lg={4}>
              <h5 style={sectionKicker} className="colorInteraction">INCREDIBLY FLUID AND INTUITIVE TO DRIVE</h5>
              <p style={sectionText}>On top of pure performance figures, however, it is also incredibly fluid and intuitive to drive, thanks to its unique handling which inspires confidence at all speeds, not just on the limit on the track. This was achieved thanks in great part to the development work carried out on the layout which has helped the car take a massive leap forward in terms of agility and responsiveness, even at slower speeds, a characteristic more in keeping with mid-rear-engined cars until now.</p>
            </Col>
            <Col lg={4}>
              <h5 style={sectionKicker} className="colorInteraction">THE INTERIOR</h5>
              <p style={sectionText}>The design’s strongest feature is the logical, ergonomic layout of the various functions within the cockpit: light and essential architecture embraces and enhances the Human Machine Interface, which places all the major controls on the steering wheel, and displays all the main information in the main binnacle straight ahead.</p>
            </Col>
          </div>
        </Col>
        <div style={imageSplitter}></div>
        <Col lg={12} style={marginBottomDiv}>
          <h4 className="colorInteraction" style={sectionHeader2}>Our Review</h4>
          <p style={sectionText2}>Sure, it costs more than a house, but the metal-melting aria from that incredibly operatic engine—priceless. The F12berlinetta is everything you could want from an Italian supercar. Power comes from a 730-hp 6.3-liter V-12, mated to a seven-speed dual-clutch automatic with rear-wheel drive. Even with all that power, the F12berlinetta is one of Ferrari’s more comfortable cars, making it a true daily-driver. For the ultimate, there’s the F12tdf, with 769 hp and downforce-improving aero add-ons.</p>
        </Col>
      </section>
    );
  }
});

export default Section;
