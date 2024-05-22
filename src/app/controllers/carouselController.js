const Carousel = require('../models/Carousel');

class CarouselController {
  async loadCarousel(req, res) {
    try {
      const quantity = req.body.number; // thieu set quantity
      const items = await Carousel.findAll({
        limit: Number(quantity)
      });
      const hostName = req.protocol + '://' + req.get('host');
      const updatedItems = items.map(item => {
        return {
          ...item.get(),
          image_path: hostName + "/assets/images/carousel" + item.image_path
        };
      });
      res.json(updatedItems);
    } catch (error) {
      res.json({ errors: error });
    }
  }

  add(req, res) {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message }); // multer error
      } else if (err) {
        return res.status(500).json({ error: 'Error while uploading image' }); // not multer error
      }
    } else {
      res.json({ "message": "Loaded file successfully" })
    }
  }

  async delete(req, res) {
    const itemId = req.params.id;
    try {
      const result = await Carousel.destroy({
        where: {
          id: itemId
        }
      });
      if (result) {
        res.status(200).json({ message: 'Item deleted successfully' });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = new CarouselController();