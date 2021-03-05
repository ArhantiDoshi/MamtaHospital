import React, { Component } from 'react';
import '../App.css';





class Doctor extends Component {
  render() {
    return(
    <React.Fragment>
        <div class="container">
        <div class="row">
        <div class="col-md-6 col-sm-12 col xs-12">
    

    <div class="card patientview" style={{marginTop:6, paddingTop:5}} className="col-6 col-md-12">
<h3 class="card-header text-white" style={{backgroundColor: 'maroon', padding:0}}>Doctor's Information</h3>
	<div class="card-body">
	<div class="media" style={{paddingBottom:5, marginBottom:5}}>
<div class="media-left media-top">
<img src="assets/images/doctor.png " class="media-object" alt="doctor"/>
    
  </div>
  <div class="media-body">
    <h4 class="media-heading">Dr. Suchita</h4>
    <p>Consultant - Obstetrician & Gynaecologist</p>
		<button type="button" class="btn-primary profilebtn" >View Profile</button>
  </div>
</div>
</div>
</div>

        
        </div>
       
        <div class="col-md-6 col-sm-12 col xs-12">
    
    <div class="card patientview" style={{marginTop:6, paddingTop:5}} className="col-6 col-md-12">
<h3 class="card-header text-white" style={{backgroundColor: 'maroon', padding:0}}>Doctor's Information</h3>
	<div class="card-body">
	<div class="media" style={{paddingBottom:5, marginBottom:5}}>
<div class="media-left media-top">
<img src="assets/images/doctor.png " class="media-object" alt="doctor"/>
    
  </div>
  <div class="media-body">
    <h4 class="media-heading">Dr. Suchita</h4>
    <p>Consultant - Obstetrician & Gynaecologist</p>
		<button type="button" class="btn-primary profilebtn" >View Profile</button>
  </div>
</div>
</div>
        </div>
        </div>
        </div>
					</div>

 </React.Fragment>
	);
}
}

export default Doctor;