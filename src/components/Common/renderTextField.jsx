import React from 'react';

const renderTextField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type="text" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderTextField;
