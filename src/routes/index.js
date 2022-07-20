const express = require("express");

const router = express.Router();

const {
    addUsers,
    getUsers,
    deleteUser,
  } = require("../controllers/user");


// Route
router.post("/user", addUsers);
router.get("/users", getUsers);
router.delete("/user/:id", deleteUser);

module.exports = router;