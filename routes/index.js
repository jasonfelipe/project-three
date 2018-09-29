const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);


//The test route just to see if routes work.
router.use("/test", function(req, res){
    res.send("Hello World");
})

// If no API routes are hit, send the React main page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
