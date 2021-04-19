import React, { Component } from 'react';
//import logo from './logo.svg';

import {FACILITY} from '../shared/facility';
import Home from './homecomponent';
import Renderfclty from './Renderfclty';
import Twiloform from './twilloform';

import EditApp from './editappointment';
import Footer from './FooterComponent';
import Navigtn from './nav12';
import Login from './login';
import Contact from './contactcomponent';
import { Switch, Route,Redirect } from 'react-router-dom';
//import Specialities from './specialitiescomponent';
import AboutUs from './aboutus';
import CreateAppointment from './appointment';
import AppointmentList from './applist';
import Vision from './Vision';
import HealthTips from './HealthTips';
import Doctor from './Doctor';
import ExercisesList from "./exercises-list.component";





class Main extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			facility:FACILITY
		};
	}
	render(){
		const HomePage = () => {
      return(
          <Home/>
      );
    }
  return (	   
          <div>
         
		   <Navigtn />
		   <Switch>
              <Route exat path='/Home' exact component={HomePage} />
			  <Route exact path='/contactus' component={Contact} />
			  <Route exact path='/Doctor' component={Doctor} />
			    <Route exact path='/aboutus' component={AboutUs} />
				<Route path="/editex" component={ExercisesList} />
				 <Route exact path='/CreateAppointment' component={CreateAppointment} />
				 <Route path='/Twiloform' component={Twiloform} />
				 <Route exact path='/Renderfclty' component={Renderfclty} />
				 <Route exact path='/HealthTips' component={HealthTips} />
				  <Route exact path='/Appointment' component={AppointmentList} />
				 <Route exact path='/Vision' component={Vision} />
				 <Route path="/edit/:id" component={EditApp} />
				 <Route exact path='/EditApp' component={EditApp} />
				 <Route exact path='/Login' component={Login} />
				 <Redirect to='./home'/>
			  
          </Switch> 
		  
		<Footer />
		
    </div>
  );
}
}
export default Main;
