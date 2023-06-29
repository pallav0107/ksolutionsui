import React from 'react';

const renderTextareaAutosize = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea
        {...input}
        style={{
          width: 'auto',
          backgroundColor: 'aliceblue',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderTextareaAutosize;

