import React, { useState } from "react";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import "./AlertMessage.css";


const AlertMessage = (props) => {
// export default class AlertMessage extends Component {
 
    // constructor(props) {
    //     super(props);
    //     const [show, setShow] = useState(true);
    // }
    const [show, setShow] = useState(true);
    // render() {
    // }
    function AlertDismissibleExample() {

      
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          );
        }
        return <Button onClick={() => setShow(true)}>Show Alert</Button>;
      }
      
      return (<AlertDismissibleExample />);
}

export default AlertMessage;