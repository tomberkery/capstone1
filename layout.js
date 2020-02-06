import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header/Header'
import Register from './register'
import CustRegister from './custregister';
import ThankYou from './thankyou'
import Home from './home'
import VendorProfile from './vendor-profile'
import vendorLogin from './vendorLogin'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Layout extends Component {
    
    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/thank-you" component={ThankYou} exact />
                    <Route path="/vendor-profile" component={VendorProfile} exact />
                    <Route path="/vendorLogin" component={vendorLogin} exact />

                </Switch>
            </div>

        );  
    }
}

export default Layout;