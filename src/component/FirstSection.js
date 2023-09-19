
import React, { useState } from 'react';
import './FirstSection.css';
import arrow from '../image/arrow.png';
import bvideo from '../video/bvideo.mp4';
import PaymentForm from './PaymentForm';
function FirstSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='coloor'>
      <div className='title'>
        <img src={arrow} alt='ss'/>
        <div className='hh'>
          <h1>Give for a Better Life</h1>
          <p>Stay Alive is a donation charity website that aims to provide support to help individuals improve their lives and support charitable causes.</p>
          <div className='tbutton'>
            <div class="bottom1">
              <div class="read-more-button">
                <a class="thm-btn bgclr-1" onClick={openPopup}>Lend a Hand</a>
                    
              </div>
            </div>
            <div className='sp'></div>
            <div class="bottom2">
              <div class="read-more-button">
                <a class="thm-btn bgclr-2" href="index.html">contact us</a>
              </div>
            </div>
          </div>    
        </div>
      </div>
      <video className='vid' autoPlay loop muted>
        <source src={bvideo} type="video/mp4" />
      </video>
      <div class="overlay"></div>

      {isPopupOpen && (
                        <div className="popup">
                          <div className="popup-content">
                            <button class="item-5" onClick={closePopup}></button>
                            <PaymentForm />
                          </div>
                        </div>
                      )}
    </div>
  );
}

export default FirstSection;
