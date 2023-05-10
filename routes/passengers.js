const router = require('express').Router();
let Guide = require('../models/passengers.model');

// GET - All data in Guides
router.route('/').get((req, res)=>{
    Guide.find()
        .then(guides => res.json(guides))
        .catch(err => res.status(400).json('Error: ' + err))
})

// POST - New one Guide data
router.route('/add').post((req, res) => {
    const fisrtName = req.body.fisrtName;
    const lastName = req.body.lastName;
    const nickName = req.body.nickName;
    const age = req.body.age;
    const birthday = req.body.birthday;
    const email = req.body.email;

    const newGuide = new Guide({
        fisrtName,
        lastName,
        nickName,
        age,
        birthday,
        email
    });

    newGuide.save()
        .then(() => res.json('New Guide Added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// GET - Specific Guide data by ID
router.route('/:id').get((req, res) => {
    Guide.findById(req.params.id)
        .then(guide => res.json(guide))
        .catch(err => res.status(400).json('Error: ' + err))
});

// UPDATE - Specific Guide data by ID
router.route('/update/:id').post((req, res) => {
    Guide.findById(req.params.id)
        .then(g => {
            g.fisrtName = req.body.fisrtName;
            g.lastName = req.body.lastName;
            g.nickName = req.body.nickName;
            g.age = req.body.age;
            g.birthday = req.body.birthday;
            g.email = req.body.email;
            
            g.save()
                .then(() =>res.json(`Guide ${req.params.id} Updated!`))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// DELETE - Specific Guide by ID
router.route('/:id').delete((req, res) => {
    Guide.findByIdAndDelete(req.params.id)
        .then(() => res.json(`Guide ${req.params.id} deleted.`))
        .catch(err => res.status(400).json('Error: ' + err))
});


module.exports = router;