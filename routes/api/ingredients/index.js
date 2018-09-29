const router = require("express").Router();
const ingredientsRoutes = require("./ingredients");

// article routes
router.use("/ingredients", ingredientsRoutes);

module.exports = router;
