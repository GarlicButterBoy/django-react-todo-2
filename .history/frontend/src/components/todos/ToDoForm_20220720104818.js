import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class TodoForm extends Component {
    renderField = ({ input, label, meta: { touched, error } }) => {
        return (
          <div className={`field ${touched && error ? "error" : ""}`}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {touched && error && (
              <span className="ui pointing red basic label">{error}</span>
            )}
          </div>
        );
    };
    
}