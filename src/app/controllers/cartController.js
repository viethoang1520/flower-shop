
const Product = require('../models/Product');
class CartController {
  async add(req, res) {
    const { productId } = req.body;
    const item = await Product.findByPk(productId);
    const hostName = req.protocol + '://' + req.get('host');
    const updatedItem = {
      ...item.get(),
      image: hostName + "/assets/images" + item.image,
      price: item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
    }
    if (item) {
      res.json({ item: updatedItem, status: true });
    } else {
      res.json({ item: null, status: false });
    }
    const like = item.like += 1;
    await Product.update({ like: like }, { where: { id: productId } });
  }

  async remove(req, res) {
    const { productId } = req.body;
    const item = Product.findByPk(productId);
    if (item) {
      await Product.destroy({ where: { id: productId } });
      res.json({ status: true });
    } else {
      res.json({ status: false });
    }
  }
}
module.exports = new CartController();