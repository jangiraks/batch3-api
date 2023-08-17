const db = require("./../db");
var express = require("express");
const dbUsers = db.users;
const router = express.Router();

async function validate(req, res) {
  var result = await dbUsers.findOne({
    email: req.body.email,
  });
  //   console.log(result);
  if (result) {
    return {
      responseCode: 1,
      responseMessage: "success",
      data: result,
    };
  } else {
    return {
      responseCode: -1,
      responseMessage: "User Not Found",
      data: null,
    };
  }
}
module.exports = {
  validate,
};
