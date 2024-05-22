const express = require('express')
const router = express.Router();
const upload = require('../middleware/ProductMulter');
const productController = require("../app/controllers/productController");

router.post("/get-item", productController.getItemById);
router.post("/load", productController.getLatestItems);
router.post("/add", upload.single('avatar'), productController.add);
router.post("/delete/:id", productController.delete);

module.exports = router;
