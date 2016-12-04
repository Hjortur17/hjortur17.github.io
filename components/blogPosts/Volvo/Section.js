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
      backgroundImage: "url('http://thebestautos.net/wp-content/uploads/2016/06/2015-Volvo-XC90-Review.jpg')",
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
          <h1 className="colorInteraction" style={sectionHeader}>Volvo XC90</h1>
          <div>
            <Col lg={4}>
              <img style={blogImage} src="http://assets.volvocars.com/us/~/media/shared-assets/images/galleries/new-cars/new-xc90/editions/excellence/xc90_excellence_item_list_0001_vcc09108.jpg" />
              <h5 style={sectionKicker} className="colorInteraction">Individual comfort</h5>
              <p style={sectionText}>Massage 'function', ventilation and heating are standard on the four individual seats. Upholstered with Perforated Fine Nappa leather.</p>
            </Col>
            <Col lg={4}>
              <img style={blogImage} src="http://assets.volvocars.com/us/~/media/shared-assets/images/galleries/new-cars/new-xc90/editions/excellence/xc90_excellence_item_list_0002_vcc09105.jpg" />
              <h5 style={sectionKicker} className="colorInteraction">Beverage Cooler</h5>
              <p style={sectionText}>The rear cooling compartment holds two 750ml bottles of your preferred beverage and two handcrafted Swedish Orrefors™ crystal glasses. </p>
            </Col>
            <Col lg={4}>
              <img style={blogImage} src="http://assets.volvocars.com/us/~/media/shared-assets/images/galleries/new-cars/new-xc90/editions/excellence/xc90_excellence_item_list_0000_vcc09298.png" />
              <h5 style={sectionKicker} className="colorInteraction">Excellence Console</h5>
              <p style={sectionText}>The intuitive Excellence Console provides fingertip access to your preferred rear seat environment. Configure the angle and heating of your seat, and keep your beverage at optimum temperature.</p>
            </Col>
          </div>
        </Col>
        <div style={imageSplitter}></div>
        <Col lg={12}>
          <div style={newDiv}>
            <h1 className="colorInteraction" style={sectionHeader2}>Our review</h1>
            <p style={sectionText2}>The XC90 is a handsome, square-jawed Swede striving to offer more efficiency and safety than its rivals, while adding a dose of Scandinavian flair. Its 2.0-liter four-cylinder uses turbocharging and supercharging to create 316 hp and drives all four wheels through an eight-speed automatic. An 80-hp electric motor joins the party in plug-in hybrid models. There’s room for seven in the handsomely appointed interior, with deeply comfortable seats as well as Sensus, Volvo’s new infotainment system.</p>
          </div>
        </Col>
      </section>
    );
  }
});

export default Section;
