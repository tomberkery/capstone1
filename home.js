import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";
//import './home.css';
//import { Link } from 'react-router-dom';
//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Container from 'react-bootstrap/Container';
Geocode.setApiKey("AIzaSyBLCsYn10pbIWoNq0OWLbZWVpnHmxiuNl0");
 
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
const mapStyles = {
    width: '50%',
    height: '100%',
  };
export class Home extends Component {

    state = {
     vendors:[],
     vendorLocation:[]
        
    }
    static defaultProps = {
        center: {
          lat: 38.62,
          lng: 90.19
        },
        
 

        zoom: 11
      };
      
      componentDidMount() {
        
        //mapping to our backend system-- the backend is looking for a post method
        axios.get('http://localhost:8080/vendor/findListOfVendors')
        .then(response=> {
          this.setState({
            vendors: response.data,
          })
          this.getVendorLocations(response.data);
        }
        )
      }
    

     getVendorLocations = (vendors) => {
       vendors.forEach((vendor, index) => {
       if(vendor.state && vendor.street){
         const address = vendor.street+" "+ vendor.city+" "+ vendor.state+" "+vendor.zip;
          this.getLatAndLong(address, vendor.businessName, index);
       }

      });
  }

  getLatAndLong = (address, name, index) => {
    // Get latidude & longitude from address.
     Geocode.fromAddress(address).then(
      response => {
         const { lat, lng } = response.results[0].geometry.location;
         console.log(lat, lng);
         const vendors = [...this.state.vendorLocation];
         vendors.push(
           <Marker title={name} key={index} position={{ lat: lat, lng: lng }} />
         );
         this.setState(
           {
             vendorLocation: vendors
           }
         )
       },
       error => {
        console.error(error);
      }
    );
    }
    render() {


        return (
            <div id ="map" style={{ height: '100%', width: '100%' }}>
           <Map
          google={this.props.google}
          zoom={13}
          style={mapStyles}
          initialCenter={{ lat: 38.62, lng: -90.19}}
        >
     {this.state.vendorLocation}
        </Map>
        
        
          
        
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBLCsYn10pbIWoNq0OWLbZWVpnHmxiuNl0'
  })(Home);