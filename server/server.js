const express = require("express");
const axios = require("axios");
require("dotenv").config(); // Load environment variables from a .env file
const cors = require('cors');
const  paymentRouter =require('./routes/Payemnt')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api', paymentRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
