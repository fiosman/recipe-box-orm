"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      amount: DataTypes.DECIMAL,
      foodStuff: DataTypes.STRING,
      recipeId: DataTypes.INTEGER,
      measurementunitId: DataTypes.INTEGER,
    },
    {}
  );
  Ingredient.associate = function (models) {
    // associations can be defined here
  };
  return Ingredient;
};
