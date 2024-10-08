var express = require("express");
const db = require("../db/querys.js")
var router = express.Router();

/* GET home page. */
router.get("/", async function(req, res, next) {
  const messages = await db.getAllMessages();
  console.log(messages);

  res.render("index", { title: "Express", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", async (req, res) => {
  const { name, message } = req.body
  await db.insertMessage(name, message);
  res.redirect("/");
});

module.exports = router;
