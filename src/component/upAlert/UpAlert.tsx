'use Client'
import React, { useState } from 'react';
import styled from 'styled-components';

interface AlertProps {
  type: 'success' | 'error' | 'info';
  message: string;
}

const AlertContainer = styled.div<{ type: string }>`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#d4edda';
      case 'error':
        return '#f8d7da';
      case 'info':
        return '#cce5ff'; 
      default:
        return '#ffffff';
    }
  }};
  color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#155724'; 
      case 'error':
        return '#721c24'; 
      case 'info':
        return '#004085';
      default:
        return '#000000';
    }
  }};
`;

const UpAlert: React.FC<AlertProps> = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return visible ? (
    <AlertContainer type={type}>
      {message}
      <button onClick={handleClose}>Close</button>
    </AlertContainer>
  ) : null;
};

export default UpAlert;
