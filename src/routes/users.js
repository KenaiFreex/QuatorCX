const router = require('express').Router();

router.get('/users/sign-up',(req,res) => {

    res.render("users/sign-up")


});

router.get('/users/sign-in',(req,res) => {

    res.render("users/sign-in")


});

module.exports = router;