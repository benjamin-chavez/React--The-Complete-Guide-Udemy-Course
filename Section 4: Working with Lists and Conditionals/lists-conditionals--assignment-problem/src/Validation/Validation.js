import React from 'react';

const validation = ( props ) => {
  let validationMessage = "Text too short";

  if (props.textLength >= 5) {
    validationMessage = "Text long enough"
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

export default validation;
