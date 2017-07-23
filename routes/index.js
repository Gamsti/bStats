const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, response, next) {

    let customColor1 = req.cookies["custom-color1"];
    customColor1 = customColor1 === undefined ? 'teal' : customColor1;

    response.render('static/index', {
        user: req.user === undefined ? null : req.user,
        loggedIn: req.user !== undefined,
        customColor1: customColor1
    });

});

module.exports = router;