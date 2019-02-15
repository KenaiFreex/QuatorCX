const router = require('express').Router();

router.get ('/',(req,res) => {

    res.send('Bienvenido al Index :)');

});

module.exports = router;