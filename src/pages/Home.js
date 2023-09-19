import React from 'react'
import FirstSection from '../component/FirstSection';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import SecondSection from '../component/SecondSection';
import PaymentForm from '../component/PaymentForm';

function Home() {
  return (
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <Footer />
        
    </div>
  )
}

export default Home