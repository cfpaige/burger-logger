var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get("/burgers", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function (req, res) {
  burgers.create(
    "burger_name", [req.body.name], function (result) {
      res.redirect("/burgers");
    })
});

router.put("/burgers/update/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burgers.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    res.redirect("/burgers");
    // if (result.changedRows === 0) {
    //   return res.status(404).end();
    // }
    // res.status(200).end();
  }
  )
});

module.exports = router;