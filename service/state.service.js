var express = require("express");
const router = express.Router();

var db = require("../db");

router.post("/save", (req, res, next) => {

    db.state(req.body).save().then(d => {
        return db.country.findByIdAndUpdate(
            req.body.country,
            { $push: { states: d._id } },
            { new: true, useFindAndModify: false }
        );
    });
    res.send("Record saved successfully!!!");
}
);

router.get("/country/:id", async (req, res, next) => {
    var data = await db.state.find({ country: req.params.id });
    res.send(data);
}
);

router.get("/", async (req, res, next) => {
    var data = await db.state.find({}).populate('cities');
    res.send(data);
}
);

router.put("/update/:id", async (req, res, next) => {
    await db.state.findByIdAndUpdate(req.params.id, req.body);
    res.send("Record updated successfully!!!");
}
);

router.delete("/delete/:id", async (req, res, next) => {
    await db.state.deleteOne({ _id: req.params.id })
    res.send("Record delete successfully!!!");
}
);

module.exports = router;
