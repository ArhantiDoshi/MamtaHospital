import React, { Component } from 'react';
import  '../App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import BootstrapModal from './Example';


class Patients extends Component {
render(){
return(
<div>
<div class="row no-gutters" style={{paddingTop:3}}>
<div class="col-md-4 col-sm-12 col xs-12">

	<div class="card patientview">
<h3 class="card-header text-white" style={{backgroundColor:'maroon', padding:0}} >Patient's Review</h3>
	<div class="card-body">
	<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <p>Very good hospital. Dr suchitra Patel is having excellence knowledge and humble attitude.
Truly satisfied.</p>
<p>----Baldev Sahani</p>
	  
    </div>
    <div class="carousel-item">
     <p>Excellent support. Timely service. Most importantly, mother and baby care taken on first priority. Found good staff support during silent hours. Thank you.</p>
<p>----Tejas Patel</p>
    </div>
    <div class="carousel-item">
       <p>It was a great & nice experience over here, the doctors are very cooperative and very experienced, they know how to treat their patients, doctors are very supportive in all the manner, they will help you regarding all your medical problems.
</p>
<p>----Yash Jain</p>
    </div>
  </div>
</div>
	</div>
	</div>	
	
	<div class="card patientview" style={{marginTop:6, paddingTop:5}}>
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
<hr style={{
	marginTop:3,
    padding:0,
    color:'#000000',
    backgroundColor: '#800000',
    height:1,

}}/>
 <div class="media" style={{paddingTop:5,marginTop:5, marginBottom:5}}>
  <div class="media-left media-top" >
    <img src="assets/images/doctor.png " alt="doc1" class="media-object" />
  </div>
  <div class="media-body">
      <h4 class="media-heading">Dr. xyz</h4>
    <p>Consultant - Obstetrician & Gynaecologist</p>
<button type="button" class="btn-primary profilebtn" >View Profile</button>
  </div>
  
</div>
<hr style={{
	marginTop:3,
    padding:0,
    color:'#000000',
    backgroundColor: '#800000',
    height:1,

}}/>

<BootstrapModal />

	</div>
	</div>					
</div>

<div class="col-md-8 col-sm-12 col xs-12">

<table id="ContentPlaceHolder1_dlPageDetails" cellspacing="0">
	<tbody>
	<tr>
		<td>
                            <div id="ContentPlaceHolder1_dlPageDetails_title_0" class="infra-box">
                                <div >
                                    <h4 class="text-white" style={{backgroundColor:"maroon"}}>INFRASTRUCTURE <span>
                                        <img src="images/cardiologt-icon.png" alt="" /></span></h4>
                                </div>

                                <div id="ContentPlaceHolder1_dlPageDetails_description_0" class="infra-desc">
                                    <ul>
<li>Well equipped Labor room with comfortable ergonomic birthing chair.</li>
<li>High risk pregnancy management.</li>
<li>High tech continuous fetal Monitors.</li>
<li>Day Care facilities for same day procedures &amp; Surgeries.</li>
<li>State of the art Endoscopic Theater with 3D Cameras, Monitors and ancillary equipments.</li>
<li>Modular operation theatres with advanced laparoscopic equipments.</li>
<li>12 Bed NICU supported by other ICU for the support of complicated deliveries.</li>
</ul>
                                </div>
                            </div>
                        </td>
	</tr>
	
	<tr>
		<td>
                            <div id="ContentPlaceHolder1_dlPageDetails_title_1" class="infra-box">
                                <div>
                                    <h4 class="text-white" style={{backgroundColor:"maroon"}}>SERVICES <span>
                                        <img src="images/cardiologt-icon.png" alt="" /></span></h4>
                                </div>

                                <div id="ContentPlaceHolder1_dlPageDetails_description_1" class="infra-desc">
                                    <ul>
<li>The department of Obstetrics and Gynaecology offers round-the-clock services for all gynaecology and obstetrics cases</li>
<li>Comprehensive women health checkup with Mammography &amp; PAP Smear Examination.</li>
<li>Early pregnancy assessment</li>
<li>Antenatal Care</li>
<li>Management of High risk and routine pregnancy</li>
<li>Pre-eclampsia Management</li>
<li>Antenatal disorders</li>
<li>Pregnancy in Diabetic women</li>
<li>Normal &amp; Painless Deliveries</li>
<li>Caesarean Section (LSCS)</li>
<li>High Risk Deliveries</li>
<li>Electronic Continuous Fetal Monitoring</li>
<li>Routine and Complicated Obstetric Surgery</li>
<li>Routine and Complicated Gynecological Surgery</li>
<li>Minimally invasive surgery</li>

</ul>
                                </div>
                            </div>
                        </td>
	</tr>
		</tbody>
	</table>

</div>

</div>

</div>

	 
                 
	);
}
}

export default Patients;