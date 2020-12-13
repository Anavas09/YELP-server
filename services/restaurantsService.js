const db = require("../db");

//Get all restaurants
const getListRestaurants = async (req, res) => {
  const { rows } = await db.query("SELECT * FROM restaurants");
  res.send(rows)
};

//Get one restaurant
const getRestaurant = async (req, res) => {
  res.status(200).send({
    data: {
      name: "mcdonalds",
    },
  });
  console.log(req.params.restaurantId);
  /*res.status(200).json({
    status: "success",
    data: {
      restaurants: [
        {
          name: "mcdonalds",
        },
        { name: "wendys" },
      ],
    },
  });*/
};

//Create a restaurant
const createRestaurant = async (req, res) => {
  res.status(201).send(req.body.name);
  /*res.status(200).json({
    status: "success",
    data: {
      restaurants: [
        {
          name: "mcdonalds",
        },
        { name: "wendys" },
      ],
    },
  });*/
};

//Update a restaurant data
const updateRestaurant = async (req, res) => {
  console.log(req.params.restaurantId);
  res.status(200).json({
    status: "success",
    name: req.body.name
  });
};

//Delte a restaurant
const deleteRestaurant = async (req, res) => {
  console.log(req.params.restaurantId);
  res.status(204).json({
    status: "success"
  });
};

module.exports = {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getListRestaurants,
  updateRestaurant,
};
