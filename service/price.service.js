var express = require("express");
const router = express.Router();

var db = require("./../db");

// router.post("/save", (req, res, next) => {
//   db.price(req.body).save();

//   res.send("Record saved successfully!!!");
// }
// );

router.post("/save", (req, res, next) => {
  db.price(req.body)
    .save()
    .then((d) => {
      return db.product.findByIdAndUpdate(
        req.body.product,
        { $push: { price: d._id } },
        { new: true, useFindAndModify: false }
      );
    });
  res.send("Record saved successfully!!!");
});

router.get("/", async (req, res, next) => {
  var data = await db.price.find({}).populate("product");
  // var data = await db.product.find({}).populate('product');
  res.send(data);
});

router.get("/:_id", async (req, res, next) => {
  var data = await db.price
    .findOne({ _id: req.params._id })
    .populate("product");
  //   console.log(data);
  res.send(data);
  console.log(data);
});

router.put("/update/:id", async (req, res, next) => {
  await db.price.findByIdAndUpdate(req.params.id, req.body);
  res.send("Record updated successfully!!!");
});

router.delete("/delete/:id", async (req, res, next) => {
  await db.price.deleteOne({ _id: req.params.id });
  res.send("Record delete successfully!!!");
});

module.exports = router;
