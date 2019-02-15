const router = require('express').Router();

router.get ('/',(req,res) => {

    res.send('Bienvenido al Index :)');
    
    
   // var spawn = require("child_process").spawn;
   // var process = spawn('python',["./hello.py", 'Hello world'] );
  
   // process.stdout.on('data',(data) =>{
   //     res.send(data.toString());
   //  })
    
});

module.exports = router;