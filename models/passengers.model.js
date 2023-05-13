const mongoose = require('mongoose');

const Schemma = mongoose.Schema;

const locationPassengerSchema = new Schemma({
    latitude: Number,
    longitude: Number,
});
const passengerSchema = new Schemma({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 100,
        Validate:{
            validator: val => val >= 18,
            message: props => `${props.value} Edad debe ser mayor o igual a 18`
        }
    },
    location: locationPassengerSchema
}, {
    timestamps: true,
});

const passenger = mongoose.model('Passenger', passengerSchema);

module.exports = passenger;