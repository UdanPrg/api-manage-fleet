const mongoose = require('mongoose');

const Schemma = mongoose.Schema;

const birthSchema = new Schemma({
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})
const guidSchema = new Schemma({
    fisrtName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickName: String,
    age: {
        type: Number,
        min: 18,
        max: 100,
        Validate:{
            validator: val => val >= 18,
            message: props => `${props.value} Edad debe ser mayor o igual a 18`
        }
    },
    birthday: birthSchema,
    email: {
        type: String,
        minLength: 7,
        required: true,
        lowercase: true
    },
}, {
    timestamps: true,
});

const Guide = mongoose.model('Guide', guidSchema);

module.exports = Guide;