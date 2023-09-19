import React from 'react';

function SuccessMessage() {
  const cardStyle = {
    background: 'white',
    padding: '60px',
    borderRadius: '4px',
    boxShadow: '0 2px 3px #C8D0D8',
    display: 'inline-block',
    margin: '0 auto',
  };

  const circleStyle = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    borderRadius: '200px',
    height: '200px',
    width: '200px',
    background: '#F8FAF5',
    margin: '0 auto',
  };

  const iconStyle = {
    
    color: '#9ABC66',
    fontSize: '100px',
    lineHeight: '200px',
    marginLeft: '-15px',
  };

  return (
        <div className="card" style={cardStyle} >
          <div style={circleStyle}>
            <i className="checkmark" style={iconStyle}>
              ✓
            </i>
          </div>
          <h1 style={{ color: '#88B04B', fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif', fontWeight: 900, fontSize: '40px', marginBottom: '10px' }}>Success</h1>
          <p style={{ color: '#404F5E', fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif', fontSize: '20px', marginBottom: "50px"}}>Thank you for your generous donation! Your support helps us make a difference.</p>
          <a href="/" className="btnn">Return</a> 

        </div>
  );
}

export default SuccessMessage;
