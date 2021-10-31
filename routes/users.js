const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/user");

router.get("/register", usersController.displayForm);

router.post("/register", usersController.registerUser);

// router.post(
//     "/login",
//     passport.authenticate("local", {
//         successRedirect: "/login-sucess",
//         failureRedirect: "/login-failure",
//     })
// );

// router.get("/login-sucess", (req, res) => {
//     res.send("Login success");
// });

// router.get("login-failure", (req, res) => {
//     res.send("Login failure");
// });

// router.get("/logout", (req, res) => {
//     req.logout();
//     res.status(200).send("Logged out");
// });

module.exports = router;
