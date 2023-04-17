const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define(
  "users",
  {
    role_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_verified_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = User;
