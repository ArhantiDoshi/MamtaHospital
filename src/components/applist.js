import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';



const Appointment = props => (
  <tr>
    <td>{props.appointment.firstname}</td>
     <td>{props.appointment.lastname}</td>
    <td>{props.appointment.contact}</td> 
    <td>{props.appointment.reason}</td> 
    <td>{props.appointment.date.substring(0,10)}</td>
    <td>
      
    <Button><Link to={"/edit/"+props.appointment._id}>Edit</Link></Button> | <Button onClick={() => { props.deleteAppointment(props.appointment._id) }}>Delete</Button>
    </td>
  </tr>
)

export default class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.deleteAppointment = this.deleteAppointment.bind(this)

    this.state = {bookapp: []};
  }

  componentDidMount() {
    axios.get('https://mamta-hospital.herokuapp.com/bookapp/')
      .then(response => {
        this.setState({ bookapp: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteAppointment(id) {
    axios.delete('http://localhost:5000/bookapp/'+id)
      .then(response => { console.log(response.data)})
      .catch((error) => {
        console.log(error);
      })

    this.setState({
      bookapp: this.state.bookapp.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.bookapp.map(currenteappointment => {
      return <Appointment appointment={currenteappointment} deleteAppointment={this.deleteAppointment} key={currenteappointment._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Booked Appointments<Link to="/home">
     <Button >
        Logout
     </Button>
 </Link></h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Lastname</th>
              <th>Contact</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}