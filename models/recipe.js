"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  Recipe.associate = function (models) {};
  return Recipe;
};
