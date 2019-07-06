import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Ops, nothing here!</h1>
    <p>This page will be build in the future</p>
    <Link to="/">Click here to return home</Link>
  </div>
);

export default ErrorMessage;
