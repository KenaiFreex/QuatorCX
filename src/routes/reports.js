const express = require('express');
const router = express.Router();

require('../models/Reports');


///////////////////////////////////////////
//////////////////////////////////////////

// --------- colorjobs Route ------------>
router.get('/colorjobs/', (req, res) => {
  res.send('colorjob page');
});

// --------- colorjobs Route ------------>

///////////////////////////////////////////
//////////////////////////////////////////

// --------- Adding a new Colorjob Route ------------>

router.get('/colorjobs/add', (req, res) => {
  res.render('colorjobs/new-colorjob');
});
// --------- Adding a new Colorjob Route ------------>

///////////////////////////////////////////
//////////////////////////////////////////

// --------- New ColorJob POST ------------>
router.post('/colorjobs/new-colorjob', (req, res) => {

  const {
    title,
    description
  } = req.body;
  const errors = [];

  if (!title) {
    errors.push({
      text: 'Please write a title'
    });
  }
  if (!description) {
    errors.push({
      text: 'Please Write a Description'
    });
  }

  if (errors.length > 0) {
    res.render('colorjobs/new-colorjob', {
      errors,
      title,
      description,
    });

  } else {


  };


});

// --------- New ColorJob POST ------------>

///////////////////////////////////////////
//////////////////////////////////////////

// --------- Exporting Router ------------>

module.exports = router;

// --------- Exporting Router ------------>