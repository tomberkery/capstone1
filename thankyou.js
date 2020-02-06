import  React from 'react';
import Alert from 'react-bootstrap/Alert';

const ThankYou = (props) => {
    return(
        <div>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Alert className= "thank-you-alert" variant="warning">
  <Alert.Heading>Thank you for signing up!</Alert.Heading>
  <p >
    
  </p>
  <hr />
  <p className="mb-0 alert-text">
  Whenever you're ready, use the top right corner of the page to log in.
  </p>
</Alert>

      {/* <h1>
          Thank you for signing up! 
      </h1> */}
      </div>
    );
  } 
  export default ThankYou;