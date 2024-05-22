const express = require('express')
const router = express.Router();
const upload = require('../middleware/CarouselMulter');
const carouselController = require("../app/controllers/carouselController");

router.post("/load", carouselController.loadCarousel);
router.post("/add", upload.single('avatar'), carouselController.add);
router.post("/delete/:id", carouselController.delete);


module.exports = router;
