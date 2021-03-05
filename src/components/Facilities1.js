import React, { Component } from 'react';

import  '../App.css';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

class Facility extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedService: null
        }
    }
    onServiceSelect(service) {
        this.setState({ selectedService: service});
    }
     renderService(service) {
         if (service != null)
             return(
                 <div key={service.id} className="col-12">
                 
                 <div class="card mb-3 border-danger" >
  <img class="card-img-top" src={service.image2}alt={service.name} width="100" height="90"/>
  <div class="card-body">
    <h5 class="card-title">{service.name}</h5>
    <p class="card-text">{service.description}</p>
    
  </div>
</div>
				
               </div>
            );
         else
             return(
                 <div></div>
             );
     }
    render() {
       
      
        const menu = this.props.services.map((service) => {
return(
<div  class="services"key={service.id}  onClick={() => {this.onServiceSelect(service)}}>
<table><tr><td>
<div className="media" style={{paddingBottom:5, marginBottom:3}}>
    <div className="media-body">
    <h4 className="media-heading" >{service.name}</h4>
<div className="media-right media-top">
<img src={service.image} className="media-object" alt="doctor"/>
  </div>
  </div>
</div>
</td></tr></table>
</div>);});


                              

          return (
              <div className="container">
                  <div className="row">
                
                      {menu}
                  </div>
                 
                    <div className="row" >
                      {this.renderService(this.state.selectedService)}
                    </div>
                  </div>
              
          );
    }
}


export default Facility;