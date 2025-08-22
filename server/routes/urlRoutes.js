const express = require("express");
const router = express.Router();
const { handleGetRequest, handlePostRequest } = require("../controllers/urlSpecificRoutes.js");

router.post("/", handlePostRequest);
router.get("/:id", handleGetRequest);

module.exports = router;
