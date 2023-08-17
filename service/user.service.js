var express = require("express");
const router = express.Router();

var db = require("./../db");

router.post("/save", (req, res, next) => {
  db.users(req.body).save();
  res.send("Record saved successfully!!!");
});

// router.post( "/login",  (req, res, next) => {
//   db.users(req.body).save();
//   console.log(req.body);
//   res.send("Record saved successfully!!!");
// }
// );

router.get("/", async (req, res, next) => {
  var data = await db.users.find({}).populate("address");
  res.send(data);
});
router.get("/:_id", async (req, res, next) => {
  // console.log(req.params)
  var data = await db.users.findOne({ _id: req.params._id });
  res.send(data);
  // console.log(data);
});
router.put("/update/:_id", async (req, res, next) => {
  await db.users.findByIdAndUpdate(req.params._id, req.body);
  res.send("Record updated successfully!!!");
  console.log(req.params);
});

router.delete("/delete/:_id", async (req, res, next) => {
  // let _id =
  await db.users.deleteOne({ _id: req.params._id });
  res.send("Record delete successfully!!!");
});

module.exports = router;
