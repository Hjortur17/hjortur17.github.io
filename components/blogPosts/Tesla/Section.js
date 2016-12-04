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
      paddingLeft: '10%',
      paddingRight: '10%',
      float: 'left;'
    }

    var sectionText = {
      float: 'left',
      marginTop: '10px',
      paddingLeft: '10%',
      paddingRight: '10%',
      fontSize: '17px',
      textAlign: 'justify'
    }

    var sectionText2 = {
      float: 'left',
      marginBottom: '30px',
      fontSize: '20px',
      textAlign: 'center',
      paddingLeft: '10%',
      paddingRight: '10%'
    }

    var imageSplitter = {
      width: '100%',
      height: '50vh',
      overflow: 'hidden',
      backgroundImage: "url('https://www.tesla.com/sites/default/files/images/model-s/model-s-interior-with-next-generation-leather-seats.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      marginBottom: '30px'
    }

    return (
      <section>
        <Col lg={12} style={marginBottomDiv}>
          <h1 className="colorInteraction" style={sectionHeader}>Tesla Model S</h1>
          <h4 className="colorInteraction" style={sectionHeader2}>Performance and safety refined</h4>
          <p style={sectionText2}>Model S is designed from the ground up to be the safest, most exhilarating sedan on the road. With unparalleled performance delivered through Teslas unique, all-electric powertrain, Model S accelerates from 0 to 60 mph in as little as 2.5 seconds. Model S comes with Autopilot capabilities designed to make your highway driving not only safer, but stress free.</p>
          <div>
            <Col lg={6}>
              <h5 style={sectionKicker} className="colorInteraction">Adaptive Lighting</h5>
              <p style={sectionText}>Model S now features full LED adaptive headlamps. Besides enhancing the already great styling, they also boost safety: 14 three-position LED dynamic turning lights improve visibility at night, especially on winding roads.</p>
            </Col>
            <Col lg={6}>
              <h5 style={sectionKicker} className="colorInteraction">Bio-Weapon Defense Mode</h5>
              <p style={sectionText}>Model S now features a Medical grade HEPA air filtration system, which removes at least 99.97% of particulate exhaust pollution and effectively all allergens, bacteria and other contaminants from cabin air. The bioweapon defense mode creates positive pressure inside the cabin to protect occupants.</p>
            </Col>
          </div>
        </Col>
        <div style={imageSplitter}></div>
        <Col lg={12} style={marginBottomDiv}>
          <h4 className="colorInteraction" style={sectionHeader2}>Built around the driver</h4>
          <p style={sectionText2}>Model S is a driver's car. The cabin combines meticulous noise engineering with Tesla's uniquely quiet powertrain to obtain the sound dynamics of a recording studio. The gem of the interior is the 17 inch touchscreen, which is angled toward the driver and includes both day and night modes for better visibility without distraction. It puts rich content at your fingertips and provides mobile connectivity so you can easily find your destination, favorite song or a new restaurant.</p>
        </Col>
      </section>
    );
  }
});

export default Section;
