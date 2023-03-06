const mongoose = require("mongoose");
const usermodel = require("./models/user.model")
mongoose.set('strictQuery', false);
const addressmodel = require("./models/address.model")
const categorymodel = require("./models/category.model")
const productmodel = require("./models/product.model")
const pricemodel = require("./models/price.model")
const rolemodel = require("./models/role.model")
const countrymodel = require("./models/country.model")
const statemodel = require("./models/state.model")
const citymodel = require("./models/city.model")

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
  city: mongoose.model("city", citymodel.cityschema)

}
