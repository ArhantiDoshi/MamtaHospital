import React, { Component } from 'react';

import  '../App.css';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

class Carousel extends Component {
	
render(){
return(
 <React.Fragment>
 <div className="container" >
 <div className="row no-gutters">
       
        <div className="col-12 carousel-column">
<div className="carousel slide" id="slider" data-ride="carousel">

<ol className="carousel-indicator">
<li className="active" data-slide-to="0" data-target="#slider"></li>
<li data-slide-to="1" data-target="#slider"></li>
<li data-slide-to="2" data-target="#slider"></li>
</ol>


<div className="carousel-inner">
<div className="carousel-item active" id="slide1">
<img className="img-responsive img-cus" src="assets/images/mamtaimg5.jpg" alt="First slide" />


</div>

<div className="carousel-item" id="slide2">
<img className="img-responsive img-cus" src="assets/images/mamtaimg4.png" alt="Second slide" />


</div>

<div className="carousel-item" id="slide3">
<img className="img-responsive img-cus" src="assets/images/mamtaimg1.png" alt="Third slide" />
<div className="carousel-caption" style={{color:'black'}}>
<h4>Our Infrastructure</h4>

</div>
</div>

<div className="carousel-item" id="slide3">
<img className="img-responsive img-cus" src="assets/images/mamtaing2.png" alt="Third slide" />
<div className="carousel-caption" style={{color:'black'}}>
<h4>Our Infrastructure</h4>

</div>
</div>


</div>
<a className="left carousel-control" href="#slider" data-slide-to="prev" role="button"><span className="icon-prev"></span></a>
<a className="right carousel-control" href="#slider" data-slide-to="next" role="button"><span className="icon-next"></span></a>

</div>
</div>
</div>
</div>

	 </React.Fragment>	
	);
	}
	}
	
	export default Carousel;