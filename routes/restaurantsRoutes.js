const router = require("express").Router();

const {
  createRestaurant,
  deleteRestaurant,
  getListRestaurants,
  getRestaurant,
  updateRestaurant,
} = require("../services/restaurantsService");

router.route("").get(getListRestaurants);
router.route("").post(createRestaurant);
router.route("/:restaurantId").get(getRestaurant);
router.route("/:restaurantId").put(updateRestaurant);
router.route("/:restaurantId").delete(deleteRestaurant);

module.exports = router;
