import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Error = ({ onClose, message }) => (
  <Alert severity="error" onClose={onClose}>
    <p>{message}</p>
  </Alert>
);

export default Error;
