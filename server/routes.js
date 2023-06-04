const router = require('express').Router();
const controller = require('./controller.js');

router.get('/receipes', controller.search );
router.get('/receipes/info', controller.getInfo);
// router.post('/receipes/calander');
// router.put('/receipes/save');


module.exports = router