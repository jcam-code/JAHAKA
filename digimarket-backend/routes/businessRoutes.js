const express = require("express");
const router = express.Router();

const businessController = require ("../controlers/businessController");

router.get("/", businessController.getBusinesses);

router.get("/:id", businessController.genessesById);

router.post("/", businessController.createBusiness);

router.put("/:id ", businessController.updateBusiness);

router.delete("/:id", businessController.delteBusines);

module.exports = router;