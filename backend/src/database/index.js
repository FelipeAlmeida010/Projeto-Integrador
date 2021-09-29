const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    dialect: "mysql",
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;

// module.exports = {
//   "username": "root",
//   "password": null,
//   "database": "moedaline",
//   "host": "http://localhost:3307",
//   "dialect": "mysql",
//   "operadorAliases": false,
// }