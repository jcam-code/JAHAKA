const express = require("express");
const router = express.Router();

const userController = require ("../controlers/userController");

router.post("/register", userController.registerUser);

router.post("/:id", userController.loginUser);

router.get("/", userController.getUsers);

router.get("/:id ", userController.getUserbyId);

router.delete("/:id", userController.deleteUser);

module.exports = router;