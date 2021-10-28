const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
    res.render("index", {});
    
});

app.get("/", (req, res) => {
    res.render("login", {});
});

app.get("/", (req, res) => {
    res.render("regis", {});
});

app.get("/test", (req, res) => {
    console.log("HIT TEST");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
