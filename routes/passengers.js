const router = require('express').Router();
let Passenger = require('../models/passengers.model');

// GET - All data in Passengers
router.route('/').get((req, res)=>{
    Passenger.find()
        .then(passengers => res.json(passengers))
        .catch(err => res.status(400).json('Error: ' + err))
})

// POST - New one Passenger data
router.route('/add').post((req, res) => {
    const fisrtName = req.body.fisrtName;
    const lastName = req.body.lastName;
    const nickName = req.body.nickName;
    const age = req.body.age;
    const birthday = req.body.birthday;
    const email = req.body.email;

    const newPassenger = new Passenger({
        fisrtName,
        lastName,
        nickName,
        age,
        birthday,
        email
    });

    newPassenger.save()
        .then(() => res.json('New Passenger Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// GET - Specific Passenger data by ID
router.route('/:id').get((req, res) => {
    Passenger.findById(req.params.id)
        .then(passenger => res.json(passenger))
        .catch(err => res.status(400).json('Error: ' + err))
});

// UPDATE - Specific Passenger data by ID
router.route('/update/:id').post((req, res) => {
    Passenger.findById(req.params.id)
        .then(p => {
            p.fisrtName = req.body.fisrtName;
            p.lastName = req.body.lastName;
            p.nickName = req.body.nickName;
            p.age = req.body.age;
            p.birthday = req.body.birthday;
            p.email = req.body.email;
            
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