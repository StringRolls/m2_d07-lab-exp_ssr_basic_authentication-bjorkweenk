const router = require("express").Router();

const {isLoggedin} = require("../error-handling/middelwares/auth.middelwares");

router.get("/userProfile", isLoggedin, (req, res) => res.render("auth/userProfile", {user: req.session.currentUser}));
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



module.exports = router;
