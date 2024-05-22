const { DataTypes } = require("sequelize");
const db = require("../../config/db");
const sequelize = db.sequelize;
const Carousel = sequelize.define('carousel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image_path: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
},
  {
    timestamps: false, // Sử dụng timestamps để tự động thêm cột createdAt và updatedAt
  }
);


module.exports = Carousel;
