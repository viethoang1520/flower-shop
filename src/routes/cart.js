const express = require('express')
const router = express.Router();
const cartController = require("../app/controllers/cartController");

router.post("/add", cartController.add);
router.post("/remove", cartController.remove);

module.exports = router;
