const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Transaction = sequelize.define("Transaction", {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  moeda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id"
    }
  }
});


Transaction.associate = (models) => {
  Transaction.belongsTo(models.User, {
    as: "user",
    foreignKey: "userId",
  })
}

module.exports = Transaction;

