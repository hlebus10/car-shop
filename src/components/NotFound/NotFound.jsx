import React from 'react';

export default function NotFound() {
  let containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh', 
  };

  let hStyle = {
    textAlign: 'center',
    fontSize: '45px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={hStyle}>
        This page does not exist
      </h1>
    </div>
  );
}
