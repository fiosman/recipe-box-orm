"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {}
  );
  Recipe.associate = function (models) {
    Recipe.hasMany(models.Instruction, { foreignKey: "recipeId" });
    Recipe.hasMany(models.Ingredient, { foreignKey: "recipeId" });
  };
  return Recipe;
};
