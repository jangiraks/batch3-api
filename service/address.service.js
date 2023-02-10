var express = require("express");
const router = express.Router();

var db = require("./../db");

router.post( "/save",  (req, res, next) => {

    db.address(req.body).save().then(d => {
        return db.users.findByIdAndUpdate(
            req.body.user,
            { $push: { addressess: d._id } },
            { new: true, useFindAndModify: false }
          );
    });    
    res.send("Record saved successfully!!!");
  }
);

router.get( "/", async (req, res, next) => {
    var data = await db.address.find({}).populate('user');    
    res.send(data);
  }
);

router.put( "/update/:id", async (req, res, next) => {
    await db.address.findByIdAndUpdate(req.params.id,req.body);
    res.send("Record updated successfully!!!");
  }
);

router.delete( "/delete/:id", async (req, res, next) => {
    await db.address.deleteOne({_id:req.params.id})
    res.send("Record delete successfully!!!");
  }
);

module.exports = router;
