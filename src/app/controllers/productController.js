const Product = require('../models/Product');

class ProductController {
  async getLatestItems(req, res, next) {
    const quantity = req.body.number;
    const type = req.body.type;
    try {
      const items = await Product.findAll({
        order: (type == "hot" ? [['like', 'DESC']] : [['updatedAt', 'DESC']]),
        limit: Number(quantity)
      });
      const hostName = req.protocol + '://' + req.get('host');
      const updatedItems = items.map(item => {
        return {
          ...item.get(),
          image: hostName + "/assets/images" + item.image,
          price: item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
        };
      });
      res.json(updatedItems);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async add(req, res, next) {
    const { name, rate, price } = req.body;
    const image = req.file.originalname;
    try {
      if (req.body) {
        imagePath = "/product/" + image;
        const newProduct = await Product.create({
          name: name,
          rate: rate,
          price: price,
          image: imagePath
        });
      }
      res.json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async delete(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      await product.destroy();
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async getItemById(req, res) {
    try {
      const { productId } = req.body;
      if (!productId) {
        return res.json({ error: 'ID is required' });
      }
      const item = await Product.findOne({
        where: {
          id: productId
        }
      });

      if (!item) {
        return res.json({ error: 'Item not found' });
      }
      const hostName = req.protocol + '://' + req.get('host');
      const updatedItem = {
        ...item.get(),
          price: item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }),
          image: hostName + "/assets/images" + item.image
      }
      res.json(updatedItem);
    } catch (error) {
      res.json({ error: error });
    }
  }
}

module.exports = new ProductController();