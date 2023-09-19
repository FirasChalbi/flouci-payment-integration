const axios = require("axios");

module.exports = {
  Add: async (req, res) => {
      const url = "https://developers.flouci.com/api/generate_payment";
      const payload = {
        "app_token": "17ffd50a-a35f-4549-96a9-ed627756b92b", // Replace with your actual app token
        "app_secret": "0c9f51b0-305a-433a-b248-97391fce99e3", // Use the secret key from your environment variables
        "amount": req.body.amount,
        "accept_card": true,
        "session_timeout_secs": 1200,
        "success_link": "http://localhost:3000/Success",
        "fail_link": "http://localhost:3000/Failed",
        "developer_tracking_id": "b7dca4c2-ab01-4aff-8e12-097bf847fdf0",
      }
      try {
        const result = await axios.post(url, payload);
  
        // Check the status code of the response
        if (result.status === 200) {
          // Request was successful, send the response data to the client
          res.send(result.data);
        } else {
          // Handle unexpected status codes
          console.error("Unexpected status code:", result.status);
          res.status(500).send("Internal server error");
        }
      } catch (error) {
        // Handle Axios errors
        if (error.response) {
          // The request was made, but the server responded with a status code
          console.error("Server responded with status code:", error.response.status);
          console.error("Response data:", error.response.data);
          res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
          // The request was made, but no response was received
          console.error("No response received from the server");
          res.status(500).send("Internal server error");
        } else {
          // Something else went wrong while setting up the request
          console.error("Error setting up the request:", error.message);
          res.status(500).send("Internal server error");
        }
      }
    },
}