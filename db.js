const mongoose = require("mongoose");
const usermodel = require("./models/user.model");
mongoose.set("strictQuery", false);
const addressmodel = require("./models/address.model");
const categorymodel = require("./models/category.model");
const productmodel = require("./models/product.model");
const pricemodel = require("./models/price.model");
const rolemodel = require("./models/role.model");
const countrymodel = require("./models/country.model");
const statemodel = require("./models/state.model");
const citymodel = require("./models/city.model");
const cartmodel = require("./models/cart.model");
const ordermodel = require("./models/order.model");
const orderitemsmodel = require("./models/orderitems.model");
const checkoutmodel = require("./models/checkout.model");
const imagemodel = require("./models/image.model");
const otpModel = require("./models/otp.model");
const usermodel = require("./models/user.model");
const { default: Password } = require("antd/es/input/Password");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/batch3db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  });

module.exports = {
  users: mongoose.model("users", usermodel.userschema),
  address: mongoose.model("address", addressmodel.addressschema),
  category: mongoose.model("category", categorymodel.categoryschema),
  product: mongoose.model("product", productmodel.productschema),
  price: mongoose.model("price", pricemodel.priceschema),
  role: mongoose.model("role", rolemodel.roleschema),
  country: mongoose.model("country", countrymodel.countryschema),
  state: mongoose.model("state", statemodel.stateschema),
  city: mongoose.model("city", citymodel.cityschema),
  cart: mongoose.model("cart", cartmodel.cartschema),
  order: mongoose.model("order", ordermodel.orderschema),
  orderitems: mongoose.model("orderitems", orderitemsmodel.orderitemsschema),
  checkout: mongoose.model("checkout", checkoutmodel.checkoutschema),
  image: mongoose.model("image", imagemodel.imageschema),
  otp: mongoose.model("otp", otpModel.otpModel),
};

// node js connect mysql database =>

// const mysql = require("mysql"); // install MySQL npm package in node js

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "Rao",
//   Password: "Rao",
//   database: "Rao",
// });
// con.connect((err) => {
//   //callback fun.
//   if (err) {
//     console.warn("error");
//   } else {
//     console.warn("connected");
//   }
// });

// con.query("select * from users", (err, result) => {
//   console.warn("result", result);
// });
