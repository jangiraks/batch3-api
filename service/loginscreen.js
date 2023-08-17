const db = require("./../db");
var express = require("express");
const dbUsers = db.users;
const router = express.Router();

// router.post( "/",  async(req, res, next)=>  {
//   var result = await  dbUsers.findOne({email: req.body.email});
//   console.log(result)
//   if (result) {
//     console.log("j")
//     return {
//       responseCode: 1,
//       responseMessage: "success",

//     };
//   } else {
//     return {
//       responseCode: -1,
//       responseMessage: "Member Not Found",

//     };
//   }
// });

// module.exports =router;

async function validate(req, res) {
  var result = await dbUsers.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  // console.log(result);
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
