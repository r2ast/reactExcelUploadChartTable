// ErrorMessage.js
import React from 'react';

const ErrorMessage = ({ typeError }) => {
  return typeError ? (
    <div className="alert alert-danger" role="alert">
      {typeError}
    </div>
  ) : null;
};

export default ErrorMessage;
