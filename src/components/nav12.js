import React, { Component } from 'react';
import { Nav, Navbar,NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';



class Navigtn extends Component {
   constructor(props) {
        super(props);		
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false 
        };
      }
	
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
		  <React.Fragment>
		<div>
                <Navbar bg="transparent" expand="md" variant="dark">
                    <div className="container">                  
                        <NavbarToggler className="custom-toggler" onClick={this.toggleNav}/>
                       <NavbarBrand className="mr-auto" href="/"><img src='assets/images/mamtaheader.png'  alt='mamta hospital' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavDropdown    noCaret  title={<span className=" fa fa-home title">Home</span>}className="navdropdown"  id="nav-dropdown"   to='/Home'>
                                        <NavLink to="Home" className="navdropborder" >Home</NavLink><br />
										                </NavDropdown>
                             <NavDropdown  noCaret title={<span className="fa fa-info title">About Us</span>} className="navdropdown" id="nav-dropdown"  to='/AboutUs'>
                                        <NavLink to="Vision" className="navdropborder" >Vision and Mission</NavLink><br />
										    <NavLink to="AboutUs" className="navdropborder"  >About MamtaHospital</NavLink> <br/>                            
                        <NavLink to="Doctor" className="navdropborder">Doctor's Profile</NavLink><br />     
                        <NavLink to="Login" className="navdropborder">Admin Login</NavLink><br />     
                                        </NavDropdown>
									    <NavDropdown  title={<span className="title">Specialities</span>}  id="nav-dropdown" className="navdropdown">
                                        
                      <NavLink to="Renderfclty" className="navdropborder">Facilities</NavLink><br /> 
                                          </NavDropdown>
									    <NavDropdown  title={<span className=" fa fa-heartbeat title">HealthInformation</span>}  id="nav-dropdown" className="navdropdown" to='/HealthInformation'>
                                        <NavLink to="HealthTips" className="navdropborder">Health Tips</NavLink><br />
                                               
                                       </NavDropdown>
								    {/* <NavDropdown  title={<span className="fa fa-user title">Appointment</span>}  id="nav-dropdown"  className="navdropdown" to='/Patient'>
                    <NavLink to="Appointment" className="navdropborder">ViewAppointment</NavLink><br />
                    <NavLink to="EditApp" className="navdropborder">EditAppointment</NavLink><br />                  
          
                                    </NavDropdown> */}
                                    
                             <NavDropdown  title={<span className=" fa fa-phone title">Contact Us</span>}  id="nav-dropdown"  className="navdropdown" to='/contactus'>
                                        <NavLink to="contactus" className="navdropborder">Contact Us</NavLink><br />
                                        <NavLink to="Twiloform" className="navdropborder">send msg</NavLink><br />   
                                    </NavDropdown>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
				</div>
  

			  </React.Fragment>
        );
    }
}

export default Navigtn;