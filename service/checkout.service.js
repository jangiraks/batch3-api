var express = require("express");
const router = express.Router();

var db = require("../db");

router.post("/save", (req, res, next) => {
  db.checkout(req.body).save();
  res.send("Record saved successfully!!!");
}
);


router.get( "/", async (req, res, next) => {
    var data = await db.checkout.find({})    
    res.send(data);
  }
);

router.put( "/update/:id", async (req, res, next) => {
    await db.checkout.findByIdAndUpdate(req.params.id,req.body);
    res.send("Record updated successfully!!!");
  }
);

router.delete( "/delete/:id", async (req, res, next) => {
    await db.checkout.deleteOne({_id:req.params.id})
    res.send("Record delete successfully!!!");
  }
);

module.exports = router;
