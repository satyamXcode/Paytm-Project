const mongoose = require("mongoose");

mongoose.connect()
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.log("Could not connect to MongoDB...", err));

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
     password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

//Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = {
    User
};