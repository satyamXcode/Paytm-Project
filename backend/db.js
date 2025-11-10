const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytmDatabase");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.Model("User", userSchema);

module.exports = {
    User
}