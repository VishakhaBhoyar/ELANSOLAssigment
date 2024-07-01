const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name: String,
    date_of_birth: Number,
    location: String,
});

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;