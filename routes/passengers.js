const router = require('express').Router();
let Passenger = require('../models/passengers.model');
let Driver = require('../models/drivers.model');
const dval = require('../functions/distanceValidator')

// POST - New one Passenger data
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const location = req.body.location;

    const newPassenger = new Passenger({
        name,
        age,
        location
    });

    newPassenger.save()
        .then(() => res.json('New Passenger Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// GET - All data in Passengers
router.route('/').get((req, res)=>{
    Passenger.find()
        .then(passengers => res.json(passengers))
        .catch(err => res.status(400).json('Error: ' + err))
})

// GET - Specific Passenger data by ID
router.route('/:id').get((req, res) => {
    Passenger.findById(req.params.id)
        .then(passenger => res.json(passenger))
        .catch(err => res.status(400).json('Error: ' + err))
});

// POST/get - All Drivers available within a 3km radius
router.route('/near-drivers/:id').post((req, res)=>{
    let passengerId = req.params.id;
    
    Passenger.findById(passengerId)
        .then(passenger => 
            Driver.find()
                .then(drivers => 
                    res.send(
                        drivers.filter(
                            rudder => dval.distanceValidator(
                                {
                                    latitud: rudder.location.latitude,
                                    longitud: rudder.location.longitude
                                },
                                {
                                    latitud: passenger.location.latitude,
                                    longitud: passenger.location.longitude
                                }
                            ).validation === true
                        )
                    )
                )
                .catch(err => err)
        ) 


        .catch(err => res.status(400).json('Error: ' + err)) 
})

// UPDATE - Specific Passenger data by ID
router.route('/update/:id').post((req, res) => {
    Passenger.findById(req.params.id)
        .then(p => {
            p.name = req.body.name;
            p.age = req.body.age;
            p.location = req.body.location;
            
            p.save()
                .then(() =>res.json(`Passenger ${req.params.id} Updated!`))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// DELETE - Specific Passenger by ID
router.route('/:id').delete((req, res) => {
    Passenger.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Passenger ${req.params.id} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;