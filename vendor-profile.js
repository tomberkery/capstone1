import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Home from './home';
class VendorProfile extends Component {

    state = {
        vendorLocation: {
            street: '',
            city: '',
            state: '',
            comments: '',
            vendorId:''
        }
     }

     //ask seth about this
     componentDidMount(){
         
        const loggedInVendor = JSON.parse(localStorage.getItem("loggedInVendor"));
        const vendorLocation =  {...this.state.vendorLocation};
        vendorLocation.vendorId = loggedInVendor.vendorId;
        this.setState (
            {
                vendorLocation:vendorLocation
            }
        );
    }
     signUpSubmitHandler = (event) => {
        //Asynchronous execution-- it makes the call to the backend, waits for the response, and jumps to the 
        //next line of code 
        //prevents the username and password from showing up in the URL
        event.preventDefault();
        //mapping to our backend system-- the backend is looking for a post method
        axios.post('http://localhost:8080/vendor/submitVendorDetails', this.state.vendorLocation)
        .then(response => {
            //navigate to thank you page here
            this.props.history.push('/');
        }).catch(error => {
             
        });
    }

    signUpChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const tempVendorLocation = {...this.state.vendorLocation};
        tempVendorLocation[key] = value
        this.setState(
            {
                vendorLocation:tempVendorLocation
            }
        )
    }
    
        render() {
                return (
                   <main className="background-image">
                     <div className="profile">
                     <header>
                         <body className="profile-form">
                                
                                 <form className = "profile-form">
                                <h1 className="h3 mb-3 text-center">Update your location</h1>
                                  <input type="text" id="street" className="form-control" name="street" value={this.state.vendorLocation.street} onChange={this.signUpChangeHandler} placeholder="Street Address" required="required" autofocus="" /><br></br>
                                 <input type="text" id="state" className="form-control" name="state" value={this.state.vendorLocation.state} onChange={this.signUpChangeHandler} placeholder="State" required="required" /><br></br>
                                 <input type="text" id="zip" className="form-control" name="zip" value={this.state.vendorLocation.zip} onChange={this.signUpChangeHandler} placeholder="Zip Code" required="required" autofocus="" /><br></br>
                                 <input type="text" id="comments" className="form-control" name="comments" value={this.state.vendorLocation.comments} onChange={this.signUpChangeHandler} placeholder="Any additional comments" required="required" autofocus="" /><br></br>
                                 <div className="checkbox mb-3">
                                 </div>
                                 
                                 <button className="btn btn-lg btn-success btn-block" type="submit" onClick={this.signUpSubmitHandler}>Submit Changes</button>
                                 
                                 <div className="checkbox mb-3"></div>
                                 <button className="btn btn-lg btn-success btn-block" type="isActive" onClick={this.signUpSubmitHandler}>Go Live</button>

                                 <h5 className="text-center"> </h5>
                                 
                                 <div className="d-flex flex-column">

                                
                                 </div>
                            </form>
                         </body>
                     </header>
                
        
                     </div>
                     
                     </main>
        );
    }
 }

 export default VendorProfile;