const router = require("express").Router();

const RestaurantsRoutes = require("./restaurantsRoutes");

router.use("/restaurants", RestaurantsRoutes);

module.exports = router;
