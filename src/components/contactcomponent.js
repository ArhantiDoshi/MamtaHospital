import React, { Component } from 'react';
import '../App.css';
import BootstrapModal from './Example';




class Contact extends Component {
  render() {
    return(
    <React.Fragment>
	<div>
<div className="row" style={{paddingTop:3}}>
<div className=" offset-1 col-md-4 col-sm-12 col xs-12">

	<div className="card patientview">
<h3 className="card-header text-white" style={{backgroundColor:"maroon", padding:0}} >Our Address</h3>
	<div className="card-body">
	4th Floor, Royal Platinum Complex, <br />
					Palanpurgam school Ugat Canal Road near L.P.Savani, <br />
					Palanpur, Surat, Gujarat 395005<br /><br />
		              
		              <i classNameName="fa fa-phone fa-lg"></i>: 9033708031, 9099927164, <br />
		              
		              <i classNameName="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         </a>
						 <BootstrapModal />
	</div>
	</div>
	</div>
	</div>
		   
               
				</div>
                
    
	 </React.Fragment>
	);
}
}

export default Contact;