const { Op, Model } = require("sequelize");
let Recipe, Instruction, Ingredient, MeasurementUnit;
let moduleError;

try {
  const db = require("../models");
  ({ Recipe, Instruction, Ingredient, MeasurementUnit } = db);
  if (Recipe === undefined) {
    moduleError = "It looks like you need to generate the Recipe model.";
  }
} catch (e) {
  console.error(e);
  if (e.message.includes("Cannot find module")) {
    moduleError = "It looks like you need initialize your project.";
  } else {
    moduleError = `An error was raised "${e.message}". Check the console for details.`;
  }
}
/* Don't change code above this line ******************************************/

async function getTenNewestRecipes() {
  // Use the findAll method of the Recipe object to return the recipes.
  // Use the options for findAll to **limit** the number of objects and order it
  //   appropriately. (That's a hint. Look through that documentation for that
  //   method for limiting the result. There's more than one "limit" in there,
  //   so read the documentation carefully.)
  //
  // The general form of this is
  //
  // Model.findAll({
  //     { ... specify your options here... }
  // });
  //
  // Docs: https://sequelize.org/master/class/lib/model.js~Model.html#static-method-findAll
  return Recipe.findAll({ limit: 10, order: [["createdAt", "DESC"]] });
}

async function getRecipeById(id) {
  // Use the findByPk method of the Recipe object to return the recipe. Use
  // nested eager loading to load the associated instructions, ingredients, and
  // measurement units.
  //
  // In the video, you saw this, where the presenter had to use the "include"
  // directive. The general form for calling and of the "find" methods with
  // eager loading looks like this.
  //
  // Model.findByPk(id, {
  //   include: [
  //     firstDataModel,
  //     {
  //       model: secondDataModel,
  //       include: [thirdDataModel]
  //     }
  //   ]
  // });
  //

  return Recipe.findByPk(id, {
    include: [{ model: Ingredient, include: [{ model: MeasurementUnit }] }, { model: Instruction }],
  });
}

async function deleteRecipe(id) {
  return Recipe.destroy({ where: { id } });
  // Use the findByPk method of the Recipe object to get the object and, then,
  // destroy it. Or, use the Model.destroy({ ... where ... }) method that you
  // saw in the video.
  //
  // Docs: https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-destroy
}

async function createNewRecipe(title) {
  const newRecipe = await Recipe.create({ title });

  return newRecipe;
  // Use the create method of the Recipe object to create a new object and
  // return it.
  //
  // Docs: https://sequelize.org/v5/manual/instances.html#creating-persistent-instances
}

async function searchRecipes(term) {
  // Use the findAll method of the Recipe object to search for recipes with the
  // given term in its title
  //
  // Docs: https://sequelize.org/v5/manual/querying.html
}

/* Don't change code below this line ******************************************/
module.exports = {
  createNewRecipe,
  deleteRecipe,
  getRecipeById,
  getTenNewestRecipes,
  searchRecipes,
  loadingDbError: moduleError,
};
