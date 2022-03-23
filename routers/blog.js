const { Router } = require("express");

const router = new Router();

//   @desc   Weblog Index Page
//   @route  GET /

router.get("/", (req, res) => {
  res.render("dashboard", {
    pageTitle: "بخش مدیریت | داشبورد",
    path: "/dashboard",
    layout: "./layouts/dashLayout",
  });
});

module.exports = router;
