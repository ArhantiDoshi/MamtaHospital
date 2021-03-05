import React from 'react'
import { Button,Modal } from 'react-bootstrap'

import "react-datepicker/dist/react-datepicker.css";
//import Dropdown from './dropdown';
import CreateAppointment from './appointment';

class BootstrapModal extends React.Component{

    constructor(props){
        super(props);
    this.state = {
      
      showHide:false,
     }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
   
   

    render(){
        return(
            <div>
			
                <Button type="button" class="btn-primary align-self-center profilebtn" onClick={() => this.handleModalShowHide()} style={{paddingTop:5,marginTop:4}}>
                    Book Appointment
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    
					
                    </Modal.Header>
                    <Modal.Body>
                      <CreateAppointment />
					
						 </Modal.Body>
                    
                </Modal>

            </div>
        )
    }
    
}

export default BootstrapModal;