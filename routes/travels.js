const router = require('express').Router();
let Travel = require('../models/travels.model');

// POST - New one Travel data
router.route('/new').post((req, res) => {
    const passengerId = req.body.passengerId;
    const driverId = req.body.driverId;
    const startTripLocation = req.body.startTripLocation;
    const endTripLocation = req.body.endTripLocation;
    const active = req.body.active;
    const status = req.body.status;

    const newTravel = new Travel({
        passengerId,
        driverId,
        startTripLocation,
        endTripLocation,
        active,
        status
    });

    newTravel.save()
        .then(() => res.json('New Travel Created!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// GET - All data in Travels
router.route('/').get((req, res)=>{
    Travel.find()
        .then(travels => res.json(travels))
        .catch(err => res.status(400).json('Error: ' + err))
})

// GET - Specific Travel data by ID
router.route('/:id').get((req, res) => {
    Travel.findById(req.params.id)
        .then(travel => res.json(travel))
        .catch(err => res.status(400).json('Error: ' + err))
});

// UPDATE - Specific Travel data by ID
router.route('/update/:id').post((req, res) => {
    Travel.findById(req.params.id)
        .then(t => {
            t.passengerId = req.body.passengerId;
            t.driverId = req.body.driverId;
            t.startTripLocation = req.body.startTripLocation;
            t.endTripLocation = req.body.endTripLocation;
            t.active = req.body.active;
            t.status = req.body.status;
            
            t.save()
                .then(() =>res.json(`Travel ${req.params.id} Updated!`))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// UPDATE - Completed Specific Travel by ID
router.route('/completed/:id').post((req, res) => {
    Travel.findById(req.params.id)
        .then(t => {
            t.active = req.body.status == "Trip Completed" ? false : true;
            t.status = req.body.status;
            
            t.save()
                .then(() =>res.json(`Travel ${req.params.id} Updated!`))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// DELETE - Specific Travel by ID
router.route('/:id').delete((req, res) => {
    Travel.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Travel ${req.params.id} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;