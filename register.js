import React, { Component } from 'react';
import axios from 'axios';
import './register.css';

class Register extends Component {

    state = {
        vendor: {
            email: '',
            phone: '',
            password: '',
            businessName: '',
            url: '',
            comments: ''
        }
    }

    signUpSubmitHandler = (event) => {
        //Asynchronous execution-- it makes the call to the backend, waits for the response, and jumps to the 
        //next line of code 
        //prevents the username and password from showing up in the URL
        event.preventDefault();
        //mapping to our backend system-- the backend is looking for a post method
        axios.post('http://localhost:8080/vendor/submitVendorDetails', this.state.vendor)
        .then(response => {
            //navigate to thank you page here
            this.props.history.push('/thank-you');
        }).catch(error => {
            //display an error message on the page 
        });
    }

    signUpChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const tempVendor = {...this.state.vendor};
        tempVendor[key] = value
        this.setState(
            {
                vendor:tempVendor
            }
        )
    }

    render() {
        return (
            <main className="background-image">
            <div className="signuppic">
            <header>
                <body className="signup-form">
                        
                        <form className = "signup-form">
                        <h1 className="h3 mb-3 text-center">Please sign up</h1>
                         <input type="email" id="email" className="form-control" name="email" value={this.state.vendor.email} onChange={this.signUpChangeHandler} placeholder="Email Address" required="required" autofocus="" /><br></br>
                        <input type="password" id="password" className="form-control" name="password" value={this.state.vendor.password} onChange={this.signUpChangeHandler} placeholder="Password" required="required" /><br></br>
                        <input type="text" id="businessName" className="form-control" name="businessName" value={this.state.vendor.businessName} onChange={this.signUpChangeHandler} placeholder="The name of your food truck" required="required" autofocus="" /><br></br>
                        <input type="url" id="url" className="form-control" name="url" value={this.state.vendor.url} onChange={this.signUpChangeHandler} placeholder="Website" required="required" autofocus="" /><br></br>
                        <input type="text" id="comments" className="form-control" name="comments" value={this.state.vendor.comments} onChange={this.signUpChangeHandler} placeholder="Any additional comments" required="required" autofocus="" /><br></br>
                        <div className="checkbox mb-3">
                        </div>
                        <button className="btn btn-lg btn-success btn-block" type="submit" onClick={this.signUpSubmitHandler}>Sign Up!</button>
                        <h5 className="text-center"> Already have an acount? Login using the top "Login" link.
                        </h5>
                   </form>
                </body>
            </header>
        

            </div>
            </main>
        );
    }
}

export default Register;