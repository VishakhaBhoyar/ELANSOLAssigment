const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
//const ejs = require("ejs");
const ejsMate = require("ejs-mate");
const Users = require("./models/users.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/elansoldb";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", (req, res) => {
    res.send("Hi, i am root");
});


//Index Route
app.get("/views", async (req, res) => {
    res.render("index.ejs");
});


//register Route
app.get("/views/signup", (req, res) => {
    res.render(__dirname + "/views/signup.ejs");
});

//Submit route
app.post("/views/login", async (req, res) => {
    const newUser = new User(req.body.user);
    await newListing.save();
    res.redirect("/views");
});

//login Route
app.get("/views/login", (req, res) => {
    res.render(__dirname + "/views/login.ejs");
});

//logged route
app.get("/views/login/logged", async (req, res) => {
    const allUsers = await Users.find({});
    res.render(__dirname + "logged.ejs", {allUsers});
});


// app.get("/testUsers", async (req, res) => {
//     let sampleUsers = new Users({
//         name: "Vishakha Bhoyar",
//         date_of_birth: 08/09/1999,
//         location: "Nagpur",
//         email: "vishakhabhoyar@gmail.com",
//         password: "12345678",
//     });

//     await sampleUsers.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});