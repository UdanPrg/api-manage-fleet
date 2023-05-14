const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
// console.log(uri);
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Use routes

const driversRoutes = require('./routes/drivers');
const travelsRoutes = require('./routes/travels');
const passengersRoutes = require('./routes/passengers');

// Entry Endpoints
app.use('/drivers', driversRoutes);
app.use('/travels', travelsRoutes);
app.use('/passengers', passengersRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});