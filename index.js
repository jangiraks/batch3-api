var express = require("express");
var app = express();
var fs = require("fs");
var db = require('./db')
var cors = require('cors')
var userservice = require('./service/user.service')

let PORT = 4000;
//cors
app.use(cors({
    origin:'*'
}));
app.use(express.json());

app.use("/user", require('./service/user.service'));
app.use("/address", require('./service/address.service'));
app.use("/category", require('./service/category.service'));
app.use("/product", require('./service/product.service'));
app.use("/role", require('./service/role.service'));

app.use("/country", require('./service/country.service'));
app.use("/state", require('./service/state.service'));
app.use("/city", require('./service/city.service'));

app.use("/cart", require('./service/cart.service'));
app.use("/order", require('./service/order.service'));
app.use("/orderitems", require('./service/orderitems.service'));
app.use("/checkout", require('./service/checkout.service'));



app.listen(PORT, () => console.log(`api run on port ${PORT}`));
