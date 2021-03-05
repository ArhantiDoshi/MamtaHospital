const router = require('express').Router();
let Workout = require('../models/work.model');

router.route('/').get((req, res) => {
  Workout.find()
    .then(work => res.json(work))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newWork = new Workout({
    username,
    description,
    duration,
    date,
  });

  newWork.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Workout.findById(req.params.id)
    .then(work => res.json(work))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.json('Work deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(work => {
      work.username = req.body.username;
     work.description = req.body.description;
     work.duration = Number(req.body.duration);
     work.date = Date.parse(req.body.date);

     work.save()
        .then(() => res.json('Work updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;