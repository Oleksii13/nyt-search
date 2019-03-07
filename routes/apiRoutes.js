const bookControllers = require("../controllers/bookControllers");
const router = require("express").Router();
const axios = require("axios");


// API Routes

router.post("/book", (req,res)=>{
 
  const book={title:req.body.volumeInfo.title, }
  bookControllers.create(book);
})


router.get("/search", (req, res) => { 
 bookControllers.google(req.query);
  
});




// If no API routes are hit, send the React app


module.exports = router;
