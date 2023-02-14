var express = require("express");
var app = express();
var cors = require('cors')
var fs = require("fs");
var db = require('./db')
var userservice = require('./service/user.service')

let PORT = 4000;
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use("/user", require('./service/user.service'));
app.use("/address", require('./service/address.service'));
app.use("/category", require('./service/category.service'));
app.use("/product", require('./service/product.service'));
app.use("/role", require('./service/role.service'));


app.listen(PORT, () => console.log(`api run on port ${PORT}`));
