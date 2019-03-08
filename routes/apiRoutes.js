const bookControllers = require("../controllers/bookControllers");
const router = require("express").Router();
const axios = require("axios");

// API Routes

router.route("/book")
.post(bookControllers.create)
.get(bookControllers.findAll);

router.route("/book/:id")
.delete(bookControllers.remove);

router.route("/search").get(bookControllers.google);



// If no API routes are hit, send the React app

module.exports = router;
