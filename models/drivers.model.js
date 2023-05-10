const mongoose  = require('mongoose');
const Schemma = mongoose.Schema;

const locationSchema = new Schemma({
    latitude: Number,
    longitude: Number,
});

const driversSchema = new Schemma({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
    },
    location: locationSchema
}, {
    timestamps: true
});

const Drivers = mongoose.model('Drivers', driversSchema );
module.exports = Drivers