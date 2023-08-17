const express = require("express");
//const loginService = require("../service/login.service");
const loginscreen = require("../service/loginscreen");
const router = express.Router();

router.post("/", validate);
router.post("/mobile", readByMobile);

function validate(req, res, next) {
  console.log(req.body);
  loginscreen
    .validate(req, res)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
function readByMobile(req, res, next) {
  loginscreen
    .readByMobile(req, res)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
module.exports = router;
