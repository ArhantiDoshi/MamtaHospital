import React, { Component } from 'react';
import axios from 'axios';

const Appointment = props => (
 
  
  <tr>
    <td>{props.appointment.firstname}</td>
    <td>{props.appointment.lastname}</td>
    {/* <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td> */}
    {/* <td>
      <Link to={"/edit/"+props.appointment._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td> */}
  </tr>

)

export default class AppointmentList extends Component {
  constructor(props) {
    super(props);

    //this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {bookapp: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/bookapp/')
      .then(response => {
        this.setState({ appointments: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

//   deleteExercise(id) {
//     axios.delete('http://localhost:5000/appoontments/'+id)
//       .then(response => { console.log(response.data)});

//     this.setState({
//       exercises: this.state.exercises.filter(el => el._id !== id)
//     })
//   }

  appointmentList() {
    return this.state.appointments.map(currentappointment => {
      return <Appointment appointment={currentappointment}  key={currentappointment._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Firstname</th>
              {/* <th>Duration</th>
              <th>Date</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.appointmentList() }
          </tbody>
        </table>
      </div>
    )
  }
}