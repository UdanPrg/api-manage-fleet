const mongoose = require('mongoose');

const Schemma = mongoose.Schema;

const startTripLocationSchema = new Schemma({
    latitude: {
        type:Number,
        required: true
    },
    longitude: {
        type:Number,
        required: true
    },
})
const endTripLocationSchema = new Schemma({
    latitude: {
        type:Number,
        required: true
    },
    longitude: {
        type:Number,
        required: true
    },
})


const travelsSchema = new Schemma({
    passengerId: {
        type: String,
        required: true
    },
    driverId: {
        type: String,
        required: true
    },
    startTripLocation: startTripLocationSchema,
    endTripLocation: endTripLocationSchema,
    active: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const Travel = mongoose.model('Travel', travelsSchema);

module.exports = Travel;