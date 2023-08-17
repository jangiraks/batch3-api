var express = require("express");
const router = express.Router();

var db = require("./../db");


router.post("/save", (req, res, next) => {

  db.city(req.body).save().then(d => {
      return db.state.findByIdAndUpdate(
          req.body.state,
          { $push: { cities: d._id } },
          { new: true, useFindAndModify: false }
      );
  });
  res.send("Record saved successfully!!!");
}
);


router.get( "/", async (req, res, next) => {
    var data = await db.city.find({})   
    res.send(data);
  }
);

router.put( "/update/:id", async (req, res, next) => {
    await db.city.findByIdAndUpdate(req.params.id,req.body);
    res.send("Record updated successfully!!!");
  }
);

router.delete( "/delete/:id", async (req, res, next) => {
    await db.city.deleteOne({_id:req.params.id})
    res.send("Record delete successfully!!!");
  }
);

module.exports = router;