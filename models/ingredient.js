"use strict";
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      amount: DataTypes.DECIMAL,
      foodStuff: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      recipeId: DataTypes.INTEGER,
      measurementunitId: DataTypes.INTEGER,
    },
    {}
  );
  Ingredient.associate = function (models) {
    Ingredient.belongsTo(models.Recipe, { foreignKey: "recipeId" });
    Ingredient.belongsTo(models.MeasurementUnit, { foreignKey: "measurementunitId" });
  };
  return Ingredient;
};
