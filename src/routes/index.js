const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;



/*const router = require('express').Router();

router.get ('/',(req,res) => {

 res.render('index');
    
//   var spawn = require("child_process").spawn;
//    var process = spawn('python',["src/hello.py", 'Kenai'] );
  
//    process.stdout.on('data',(data) =>{
//        res.send(data.toString());
//  })
    

});

router.get ('/about',(req,res) => {

    res.render('about');
       
   //   var spawn = require("child_process").spawn;
   //    var process = spawn('python',["src/hello.py", 'Kenai'] );
     
   //    process.stdout.on('data',(data) =>{
   //        res.send(data.toString());
   //  })
       
   
   });

module.exports = router; */