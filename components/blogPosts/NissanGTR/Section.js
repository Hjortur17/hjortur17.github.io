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

    var imageSplitter = {
      width: '100%',
      height: '40vh',
      overflow: 'hidden',
      backgroundImage: "url('http://www.nissanusa.com/dam/nissan/vehicles/sportscars/gt-r/2017/features/exterior/2017-nissan-gtr-rear-fascia-large.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }

    var imageSplitter2 = {
      width: '100%',
      height: '40vh',
      overflow: 'hidden',
      backgroundImage: "url('http://www.nissanusa.com/dam/nissan/vehicles/sportscars/gt-r/2017/features/performance/2017-nissan-gtr-black-rear-profile-large.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }

    return (
      <section>
        <Col lg={12} style={marginBottomDiv}>
          <h1 className="colorInteraction" style={sectionHeader}>Nissan GT-R</h1>
          <div>
            <Col lg={4}>
              <h5 style={sectionKicker} className="colorInteraction">Redesigned Rear Fascia</h5>
              <p style={sectionText}>The GT-Rs rear fascia has been extended at the sides to accelerate air away from the back of the bumper, helping to pull hot gases away, to cool the exhaust.</p>
            </Col>
            <Col lg={4}>
              <h5 style={sectionKicker} className="colorInteraction">Reshaped Side Skirts and C-Pillar</h5>
              <p style={sectionText}>Redesigning the GT-Rs side skirts helps prevent air flow from being drawn underneath the vehicle. The area around the C-Pillar has been refined to reduce turbulence, and to help accelerate air flow toward the rear of the body.</p>
            </Col>
            <Col lg={4}>
              <h5 style={sectionKicker} className="colorInteraction">Re-Imagined Front End</h5>
              <p style={sectionText}>Larger grille openings allow more cooling air to key components. Reshaping the front fascia helps direct air around the front wheel wells, reducing drag.</p>
            </Col>
          </div>
        </Col>
        <div style={imageSplitter}></div>
        <Col lg={12} style={marginBottomDiv}>
          <div style={newDiv}>
            <Col lg={6}>
              <h5 style={newSectionHeader} className="colorInteraction">Dialed In Like Never Before</h5>
              <p style={sectionText}>The Display Commander lets you dial in your world, allowing you to control key functions through GT-Rs multi-touch screen [*]. By rotating the dial, or pushing it to the left or right, you can scroll through all menus, and move selections around the screen.</p>
            </Col>
            <Col lg={6}>
              <h5 style={newSectionHeader} className="colorInteraction">The Face of Performance</h5>
              <p style={sectionText}>The combination meter uses meshing gears as its motif. The tachometer is placed in the center, with the large-scale gear indicator on the upper right, supporting the driver with immediate readability when driving on the circuit.</p>
            </Col>
          </div>
        </Col>
        <div style={imageSplitter2}></div>
        <Col lg={12}>
          <div style={newDiv}>
            <h1 className="colorInteraction" style={sectionHeader}>Fun Facts</h1>
            <Col lg={4}>
              <h5 style={newSectionHeader} className="colorInteraction">The Heart of the Legend</h5>
              <p style={sectionText}>Nissan challenged convention at every point of the Nissan GT-Rs development. Instead of a large, heavy engine thirsty for fuel, the Nissan GT-R is powered by an ideally sized, twin-turbocharged 3.8-L V6 that produces a prodigious 565 hp and equally immense 467 lb.-ft of torque. Just as important as the engineering is the actual assembly, which is done by hand by a single master craftsman, whose signature you’ll find on a small, but prominent, plaque.</p>
            </Col>
            <Col lg={4}>
              <h5 style={newSectionHeader} className="colorInteraction">Location, Location, Location</h5>
              <p style={sectionText}>In another break with convention, Nissan GT-Rs Premium Midship Platform places the engine feather back in the chassis for better handling. This unique layout also mounts the transmission with the transfer case in the rear of the Nissan GT-R, creating the world’s first independent rear transaxle for an All-Wheel Drive vehicle.</p>
            </Col>
            <Col lg={4}>
              <h5 style={newSectionHeader} className="colorInteraction">A Supercar that sculps the wind</h5>
              <p style={sectionText}>Relentless tuning of the GT-Rs aerodynamics maintains its incredibly clean Coefficient of Drag to a super-slippery 0.26, yet provides consistent downforce. While you see a substantial, powerful supercar, to the wind, it punches through the air like a lo-slung, mid-engine supercar. Pure aerodynamic alchemy.</p>
            </Col>
          </div>
        </Col>
      </section>
    );
  }
});

export default Section;
