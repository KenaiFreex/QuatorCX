const express = require('express');
const router = express.Router();

const Colorjob = require('../models/Colorjob');


///////////////////////////////////////////
//////////////////////////////////////////

// --------- colorjobs Route ------------>
router.get('/colorjobs',async (req, res) => {

  const colorjob = await Colorjob.find();
  res.render('colorjobs/all-colorjobs', { colorjob });
  
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
router.post('/colorjobs/new-colorjob', async (req, res) => {

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

    const newColorjob = new Colorjob({title,description});
    await newColorjob.save();
    res.redirect('/Colorjobs');
    
  };


});

// --------- New ColorJob POST ------------>

///////////////////////////////////////////
//////////////////////////////////////////

// --------- Exporting Router ------------>

module.exports = router;

// --------- Exporting Router ------------>