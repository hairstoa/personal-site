import React from "react";

import "./FormErrors.css";

const FormErrors = (props) => {
    // export default class DevCard extends Component {
    return (
        <div className='formErrors'>
        {Object.keys(props.formErrors).map((fieldName, i) => {
          if(props.formErrors[fieldName].length > 0){
            return (
              <p className="error-msg" key={i}>{fieldName} {props.formErrors[fieldName]}</p>
            )        
          } else {
            return '';
          }
        })}
      </div>
    );
}

export default FormErrors;


