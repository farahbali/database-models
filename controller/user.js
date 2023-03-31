const userService = require('../service/user');
const Sequelize = require('sequelize');
const Product=require('../db/models/product')
const Type=require('../db/models/type');
const Size=require('../db/models/size')
const Price=require('../db/models/price')
const ProductSize = require('../db/models/productSize');
class UserController {
  async getUser(req, res, next) {
    try {
      const user = await userService.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  }
  async getAllProducts(req,res,next) {
    try {
      const products = await Product.query({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Type,
            attributes: ['name'],
            through: { attributes: [] } // to exclude the join table from the result
          }
        ]
      });
      res.json(products);
    } catch (error) {
      next(error);
    }
  }
  async getAllTypes(req, res, next) {
    try {
      const types = await Type.query()
      .join('product', 'type.product_id', 'product.id')
      .join('price', 'type.price_id', 'price.id')
      .join('product_size','product_size.product_id','product.id')
      .join('size','size.id','product_size.size_id')
      .select('type.*', 'product.*','price.*','size.*')
      res.json(types);
    } catch (error) {
      throw error;
    }
  }  
}

module.exports = new UserController();
