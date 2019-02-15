const router = require('express').Router();

router.get('/users',(req,res) => {

    res.send("Usuarios");


});

module.exports = router;