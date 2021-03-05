
import React, { Component } from 'react';

import  '../App.css';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';


class Enquiry extends Component {
render(){
return(





<div class="enq_new">
            <span class="enqtoggle_btn" ><img src="images/enquire-btn.png" style={{width:50}} alt=" " /></span>
<ul style={{display:"bold"}}>
                <div class="inquiry-form" style={{backgroundColor:"white"}}>
                    <button type="button" class="close">×</button>
                    <div class="title-sub">
                        <h6>Welcome</h6>
                        <h4>May i help you?</h4>
                    </div>
                    <div class="">
                        <div class="form-area">
                            
                                <div class="form-group">
                                    <input name="ctl00$txtname1" type="text" id="txtname1" class="form-control" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input name="ctl00$txtemail1" type="text" id="txtemail1" class="form-control" onblur="CheckEmail();" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input name="ctl00$txtmobile1" type="text" maxlength="15" id="txtmobile1" class="form-control" onkeypress="return isNumber(event)" placeholder="Mobile Number" />
                                </div>
                                <div class="form-group">
                                    <textarea name="ctl00$txtmessage1" rows="2" cols="20" id="txtmessage1" class="form-control" placeholder="Message"></textarea>
                                </div>
                                <input type="submit" name="ctl00$btnSubmit1" value="Submit" onclick="return ValidationforEnquiryF(); return false;" id="btnSubmit1" class="btn btn-success" />
                                <div class="clearfix">
                                </div>
                           
                        </div>
                    </div>
                </div>
            </ul>
        </div>
		);
		}
		}
		
		export default Enquiry;