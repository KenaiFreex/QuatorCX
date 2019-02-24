const express = require('express');
const router = express.Router();

require('../models/Reports');

router.get('/testing/', (req, res) => {
  res.send('testing page');
});


router.get('/testing/add', (req, res) => {
  res.render('testing/new-test');
});


router.post('/testing/new-test',(req,res) =>{

const {title,description} = req.body;
const errors = [];

if(!title){
  errors.push({text: 'Please write a title'});
}
if (!description){
  errors.push({text: 'Please Write a Description'});
}

if(errors.length > 0){
  res.render('testing/new-test',{
    errors,
    title,
    description,
  });

}else{
  
};


});

module.exports = router; 