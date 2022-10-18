const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING(16),
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING(16),
    allowNull: false,
    field: "last_name",
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(14), // +58 
    allowNull: false,
    unique: true
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING(1),
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'normal'
  },
  country: {
    type: DataTypes.STRING(30),
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'active'
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_verified',
    defaultValue: false
  },
}); 

module.exports = Users