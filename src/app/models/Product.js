const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  rate: {
    type: DataTypes.FLOAT
  },
  price: {
    type: DataTypes.STRING
  },
  like: {
    type: DataTypes.INTEGER
  },
  image: {
    type: DataTypes.STRING
  }
},
  {
    timestamps: true, // Sử dụng timestamps để tự động thêm cột createdAt và updatedAt
  }

);


module.exports = Product;
