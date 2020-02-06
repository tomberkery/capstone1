import React, { Component } from "react";
import { Form, Button  } from "react-bootstrap";
import axios from 'axios';
import "./vendorLogin.css";

export default class Login extends Component {

    state = {
        user: {
            email: "",
            password: ""
        }
    }

    validateForm() {
        return this.state.user.email.length > 0 && this.state.user.password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("submited data", this.state)
        axios.post('http://localhost:8080/vendor/login', this.state.user)
        .then(response => {
            localStorage.setItem("loggedInVendor", JSON.stringify(response.data));
            //navigate to thank you page here
            this.props.history.push('/vendor-profile');
        }).catch(error => {
            //display an error message on the page 
        });
    }

    onChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const tempUser = {...this.state.user};
        tempUser[key] = value
        this.setState({user: tempUser})
    }

    render(){
        return (
            <div className="Login">
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group controlId="email" bsSize="large">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    name="email"
                    onChange={e => this.onChangeHandler(e)}
                />
                </Form.Group>
                <Form.Group controlId="password" bsSize="large">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    onChange={e => this.onChangeHandler(e)}
                    type="password"
                    name="password"
                />
                </Form.Group>
                <Button block bsSize="large" color="Green" disabled={!this.validateForm()} type="submit" >
                Login
                </Button>
            </form>
            </div>
        );
    }
}