var express = require("express");
var router = express.Router();

/* GET Hour reservation page */
router.get("/", function(req, res, next) {
  res.render("horas", { title: "Reserva de horas" });
});

module.exports = router;
