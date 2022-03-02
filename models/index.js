const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");
const ListItem = require("./ListItem");

// The relationships defined between each models 
User.hasMany(ListItem, {
  foreignKey: "user_id",
});

ListItem.belongsTo(User, {
  foreignKey: "user_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

module.exports = { User, Product, Category, ListItem };