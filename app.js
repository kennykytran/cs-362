const express = require("express");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {});
});

app.get("/login", (req, res) => {
    res.render("login", {});
});

app.get("/register", (req, res) => {
    res.render("register", {});
});

app.listen(process.env.PORT, () => {
    console.log(
        `Example app listening at http://localhost:${process.env.PORT}`
    );
});
