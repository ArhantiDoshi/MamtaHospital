import React from 'react'
import { Button,Modal } from 'react-bootstrap'


class BootstrapModal extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }
sayHello() {
    alert('Thank you!! We will contact you soon');
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
                    <Modal.Title>Book Appointment</Modal.Title>
					
                    </Modal.Header>
                    <Modal.Body>
					<p>Please fill this form and we will contact you for appointment</p>
					<form>
                    <div class="form-group row">
                        <label for="firstname" class="col-md-4 col-form-label">First Name:</label>
                        <div class="col-md-7">
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastname" class="col-md-4 col-form-label">Last Name:</label>
                        <div class="col-md-7">
                            <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name"/>
                        </div>
                    </div>
					  <div class="form-group row">
                        <label for="telnum" class="col-md-4 col-form-label">Contact Tel:</label>
                        <div class="col-5 col-md-3">
                            <input type="tel" class="form-control" id="areacode" name="areacode" placeholder="Area code" />
                        </div>
                        <div class="col-5 col-md-5" style={{padding:0}}>
                            <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. number" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="emailid" class="col-md-4 col-form-label">Email:</label>
                        <div class="col-md-8">
                            <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email" />
                        </div>
                    </div>
					<div class="form-group row">
                        <div class="offset-md-7 col-md-5">
						<button onClick={this.sayHello} type="button" class="btn text-white" style={{backgroundColor:"maroon",fontcolor:"white"}}>Submit</button>
						
                            
                        </div>
                    </div>
                </form>
						 </Modal.Body>
                    
                </Modal>

            </div>
        )
    }
    
}

export default BootstrapModal;