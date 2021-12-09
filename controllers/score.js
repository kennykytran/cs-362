const axios = require("axios");

exports.showUserScore = (req, res) => {
    axios
        .get(`sonnyleetan.xyz:8000/score/sonny`)
        .then((response) => {
            let userScore = response.data;
            res.render("score", { userScore: userScore });
        })
        .catch((err) => {
            res.render("score", {
                userScore: "CANT RETRIEVE SCORE AT THE MOMENT",
            });
        });
};
