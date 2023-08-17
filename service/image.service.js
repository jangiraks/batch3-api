var express = require("express");
const router = express.Router();

var db = require("./../db");

router.post("/save", (req, res, next) => {
  db.image(req.body)
    .save()
    .then((d) => {
      return db.product.findByIdAndUpdate(
        req.body.product,
        { $push: { image: d._id } },
        { new: true, useFindAndModify: false }
      );
    });
  res.send("Record saved successfully!!!");
});

router.get("/", async (req, res, next) => {
  var data = await db.image.find({}).populate("products");
  // var data = await db.product.find({}).populate('product');
  res.send(data);
});

router.get("/:_id", async (req, res, next) => {
  // console.log(req.params)
  var data = await db.image
    .findOne({ _id: req.params._id })
    .populate("products");
  res.send(data);
});

router.put("/update/:_id", async (req, res, next) => {
  await db.image.findByIdAndUpdate(req.params._id, req.body);
  res.send("Record updated successfully!!!");
});

router.delete("/delete/:_id", async (req, res, next) => {
  // let _id =
  await db.image.deleteOne({ _id: req.params._id });
  res.send("Record delete successfully!!!");
});

module.exports = router;
