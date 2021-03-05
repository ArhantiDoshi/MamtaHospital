const router = require('express').Router();
let Appointment = require('../models/bookapp.model');

router.route('/').get((req, res) => {
  Appointment.find()
    .then(bookapp => res.json(bookapp))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
const lastname=req.body.lastname;
const contact=req.body.contact;
const reason=req.body.reason1;
const date = Date.parse(req.body.date);
  const newAppointment = new Appointment({firstname,lastname,contact,reason,date});

  newAppointment.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});
router.route('/:id').get((req, res) => {
  Appointment.findById(req.params.id)
    .then(appointment => res.json(appointment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 Appointment.findById(req.params.id)
    .then(appointment => {
      appointment.firstname = req.body.firstname;
      appointment.lastname = req.body.lastname;
      appointment.contact = Number(req.body.contact);
      appointment.reason = req.body.reason1;
    appointment.date = Date.parse(req.body.date);

      appointment.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;