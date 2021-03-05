// import models
const Product = require('./Product')
const Category = require('./Category')
const Tag = require('./Tag')
const ProductTag = require('./ProductTag')

/* Product belongs to Category
    a category can have multiple products
    but a product can only belong to one category. */

Product.belongsTo(Category)

// Categories have many Products (models)

Category.hasMany(Product)

/* Products belongToMany Tags (through ProductTag)
    Using the ProductTag through model,
    allow products to have multiple tags
    and tags to have many products. */

Product.belongsToMany(Tag, { through: ProductTag })

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
}
