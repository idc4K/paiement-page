const express = require('express');
require('dotenv').config({path: './config/.env'});
const app = express();

const userRoutes = require('./routes/PayTech');


//routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRoutes);
// server
app.listen(process.env.PORT, () => {
    console.log(`listening on ports ${process.env.PORT}`);
  });