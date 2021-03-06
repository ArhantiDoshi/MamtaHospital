import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAppointment extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.onChangeReason1 = this.onChangeReason1.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname:'',
      contact:'',
      reason1:'',
      reason:'',
      date: new Date()
    }
  }
  onChangeReason1(e) {
    this.setState({
      reason1: e.target.value
    })
  }
 
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }
  onChangeContact(e) {
    this.setState({
    contact: e.target.value
    })
  }
  onChangeReason(e) {
    this.setState({
      reason: e.target.value
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const appointment = {
      firstname:this.state.firstname,
      lastname: this.state.lastname,      
      contact:this.state.contact,
      reason:this.state.reason,
      reason1:this.state.reason1,
      date: this.state.date
    }

    console.log(appointment);

    axios.post('https://localhost:5000/bookapp/add', appointment)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.log(error);
      })

    this.setState({
      firstname: '',
      lastname:'',
      contact:'',
      rason1:'',
      date:'',
    })
    window.confirm("Thank you for bookig appointment with us. We will contact you soon");
  }

  render() {
    return (
      <div>
        <h3>Book Appointment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Firstname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstname}
                onChange={this.onChangeFirstname}
                />
          </div>
          <div className="form-group"> 
            <label>Lastname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                />
          </div>
          <div className="form-group"> 
            <label>Contact: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
                />
          </div>
          <div className="form-group"> 
            <label>Select Reason: </label>
          <select value={this.state.reason1}
                onChange={this.onChangeReason1}
                    >
          <option selected value="Select Reason">Select Reason</option>    
  <option value="Gynacology">Gynacology</option>
  <option value="Fertility">Fertility</option>
  <option  value="Pregnancy Care">Pregnancy Care</option>
  <option value="Skin Care">Skin Care</option>
  <option value="HealthCare">HealthCare</option>
  <option value="Obasity">Obasity</option>
  <option value="ChildCare">ChildCare</option>
  <option value="Cancer">Cancer</option>

</select>
</div>





          <div className="form-group"> 
            <label>Reason: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.reason1}
                onChange={this.onChangeReason}
                />
          </div>
          <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}