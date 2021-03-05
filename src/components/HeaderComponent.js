import React, { Component } from 'react';

import  '../App.css';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
	<div class="header">
<hr style={{
	margin:0,
    padding:0,
    color:'maroon',
    height:4,
borderColor : "maroon"
}}/>
	<div class="container">
	<div class="row no-gutters"> 
	<div class="col-md-5 col-sm-12 col xs-12">
	<div class="media media-margin">
  <img class="align-self-centre"src="assets/images/mamtaheader.png" alt="Hospital logo" />
  </div>
  </div>
 <div class="col-md-7 col-sm-12 col xs-12">
  <div class="comcontect">
   <div class="raw">
   <ul>
   <li>
   <div class="comcontect-img">
   <img src="assets/images/helpline.png" alt=" " />                                        
   </div>
   
   </li>
 <li>
   <div class="comcontect-img">
   <img src="assets/images/emergency.png" alt=" "/>                                        
   </div>
   
   </li>
   <li>
   <div class="comcontect-img">
   <img src="assets/images/ambulance1.png" alt=""/>                                        
   </div>
   
   </li>
 <li>
   <div class="comcontect-img">
   <img src="assets/images/fax.png" alt=" "/>                                        
   </div>
   
   </li>
 </ul>
 </div>
 </div>
 </div>
  </div>   
  </div>
<hr  style={{
    color: '#000000',
    backgroundColor: '#000000',
    height: .4,
    borderColor : '#4863A0'
}}/>  
  </div>

    
     
    </React.Fragment>
    );
  }
}

export default Header;