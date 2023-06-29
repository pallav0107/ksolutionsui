import React from 'react';

const renderDropDown = ({ input, label, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input}>{children}</select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderDropDown;
