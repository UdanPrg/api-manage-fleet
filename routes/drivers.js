const router = require('express').Router();
let Driver = require('../models/drivers.model');
const dval = require('../functions/distanceValidator')

// POST - New one Driver data
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const available = req.body.available;
    const location = req.body.location;

    const newDriver = new Driver({
        name,
        age,
        available,
        location
    });

    newDriver.save()
        .then(() => res.json('New Driver Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// GET - All data in Drivers
router.route('/').get((req, res)=>{
    Driver.find()
        .then(drivers => res.json(drivers))
        .catch(err => res.status(400).json('Error: ' + err))
})


// GET - Specific Driver data by ID
router.route('/:id').get((req, res) => {
    Driver.findById(req.params.id)
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error: ' + err))
});

// GET - All Drivers aviable
router.route('/available').get((req, res)=>{
    Driver.find({available: true})
        .then(drivers => res.json(drivers))
        .catch(err => res.status(400).json('Error: ' + err))
})

// POST/get - All Drivers available within a 3km radius
router.route('/within-radius').post((req, res)=>{
    let latitude = req.body.location.latitude;
    let longitude = req.body.location.longitude;

    // Validated all drivers
    // Driver.find()

    // Validated all drivers available: true
    Driver.find({available: true})
        .then(drivers => 
            res.send(
                drivers.filter(
                    item => dval.distanceValidator(
                        {
                            latitud: item.location.latitude,
                            longitud: item.location.longitude
                        },
                        {
                            latitud: latitude,
                            longitud: longitude
                        }
                    ).validation === true
                )
                
            )
        )
        .catch(err => res.status(400).json('Error: ' + err))
})

// UPDATE - Specific Driver data by ID
router.route('/update/:id').post((req, res) => {
    Driver.findById(req.params.id)
        .then(drv => {
            drv.name = req.body.name;
            drv.age = req.body.age;
            drv.available = req.body.available;
            drv.location = req.body.location;
            
            drv.save()
                .then(() =>res.json(`Driver ${req.params.id} Updated!`))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// DELETE - Specific Driver by ID
router.route('/:id').delete((req, res) => {
    Driver.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Driver ${req.params.id} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;