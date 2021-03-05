import React, { Component } from 'react';
//import logo from './logo.svg';
import Carousel from './crcl';
import Patients from './PatientsVisitorsComponent';




class  Home extends Component
{

	render(){
  return (
    <div>	   
    <div className="container">
           <Carousel />
           </div>
           <div>	
<Patients />		   
    </div>
    </div>
  );
}
}
export default Home;
