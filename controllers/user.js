const User = require("../models/user");

exports.displayForm = (req, res) => {
    res.render("/register");
};

exports.registerUser = (req, res) => {
    User.createNewUser(req.body.user, (err) => {
        if (err) {
            res.redirect("/register");
            return;
        }
        res.redirect("/login");
    });
};
