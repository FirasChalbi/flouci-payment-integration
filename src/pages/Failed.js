import React from 'react';

function ErrorMessage() {
  return (
    <div className="container">
              <i className="warning icon"></i>
              <div className="content" style={{ color: '#404F5E', fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif', fontSize: '20px', marginBottom: "30px",marginTop: "10%"}}>
                  Oops! Something went wrong.

            </div>
            <a href="/" className="btnn">Return</a> 

        </div>
  );
}

export default ErrorMessage;
