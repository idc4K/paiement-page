const express = require('express');
require('dotenv').config({path: './config/.env'});
const app = express();
// server
app.listen(process.env.PORT, () => {
    console.log(`listening on ports ${process.env.PORT}`);
  });