import React, { Component } from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';

class Login extends Component {
    constructor(props){
                super(props);
              this.onChangeLastname=this.onChangeLastname.bind(this);
                 this.onChangeUsername = this.onChangeUsername.bind(this);
           this.click=this.click.bind(this);
           this.click1=this.click1.bind(this);
                 this.state = {
                     username:'',
                     lname:'doshi'
              
                 }
             }
             onChangeUsername(e) {
                        this.setState({
                         username: e.target.value
                        })
                      }
                      onChangeLastname(e) {
                        this.setState({
                        lname: e.target.value
                        })
                      }
                      click(e){
                          return(
                              <div>
                        <NavLink to="AboutUs" className="navdropborder"  >About MamtaHospital</NavLink> 
                      
                        {/* console.log('yes');
                        alert('yes'); */}
                        </div>)
                          
                     }
                     click1(e){
                        // it will not print the value
                        console.log('no');
                        alert('Please Enter Valid Username');
                     }
	render (){

        
        if(this.state.username==='a'){
    return(
		    <div className="container">
			<div class="row">
            <form>
        <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
        </form>
        <Link to="/Appointment">
     <Button >
        Login
     </Button>
 </Link>
                {/* <Button onClick={this.click}>edit</Button> */}
                </div>
                </div>
                )
                }
                else   if(this.state.username!=='a')
                {return(
                    <div className="container">
                    <div class="row">
                    <form>
        <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
        </form>
                        <Button onClick={this.click1}>Login</Button>
                        </div>
                        </div>
                       
                 ) }

                }


                }
export default Login;