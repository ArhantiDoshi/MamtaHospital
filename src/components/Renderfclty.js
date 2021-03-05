import { SERVICES2 } from '../shared/services2';
import React, { Component } from 'react';
import Facility from './Facilities1';


class Renderfclty extends Component{
    constructor(props) {
        super(props);
        this.state={
            services:SERVICES2

        };
        
    }
    render(){
        return(
            <div>
               
                 <Facility services={this.state.services} />
                </div>
        );
    }
}

export default Renderfclty;