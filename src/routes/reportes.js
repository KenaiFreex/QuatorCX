const router = require('express').Router();

router.get('/reportes',(req,res) =>{

    res.send('Reportes');

});

module.exports = router;