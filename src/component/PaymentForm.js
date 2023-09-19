import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentLink, setPaymentLink] = useState("");

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const generatePaymentLink = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/payment", { amount });
      const link = response.data.result.link; // Extract the payment link from the response
      setPaymentLink(link);
      redirectToPayment(link); // Redirect to the payment link
    } catch (error) {
      console.error("Error generating payment link:", error);
    }
  };

  const redirectToPayment = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <h2>Choose an Amount</h2>
      <div style={{marginLeft: "150px", paddingBottom: "20px", paddingTop: "50px"}}>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={handleAmountChange}
        className="inp"
      />
      </div>
      <button className="btnn" onClick={generatePaymentLink}>Donate</button>
    </div>
  );
};

export default PaymentForm;
