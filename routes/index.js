const express = require("express");
const router = express.Router();
const  {addTwoNumbers} = require("../controllers/add.controller");

router.route('/sum/:firstNumber')
.get(addTwoNumbers);

module.exports = router;