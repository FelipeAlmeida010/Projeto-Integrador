const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


User.associate = (models) => {
  User.hasMany(models.Transaction, {
    as: "transactions",
    foreignKey: "userId",
    onDelete: "cascade"
  })
}

module.exports = User;

