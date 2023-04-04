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
      const products = await Product.query()
      .select('name','description','image','exclude_extra')
      res.json(products);
    } catch (error) {
      next(error);
    }
  }
  async getAllSizePrice(req,res,next) {
    try {
      const sizes = await Size.query().select('size').withGraphJoined('price')
      .modifyGraph('price', builder => {
        builder.select('price');
      })
      res.json(sizes);
    } catch (error) {
      next(error);
    }
  }
  async getProductById(req,res,next) {
    try {
      const product = await Product.query()
      .findById(req.params.id)
      .withGraphJoined('types')
      .withGraphJoined('types.price')
      .select('name')
      .modifyGraph('types', builder => {
        builder.select('type', 'image', 'description');
      })
      .modifyGraph('types.price', builder => {
        builder.select('price');
      });
    res.json(product);
    } catch (error) {
      next(error);
    }
  }
  async getAllTypes(req, res, next) {
   const types=await Type.query().select('type','description','image').withGraphJoined('price')
   .modifyGraph('price', builder => {
    builder.select('price')
  })
   res.json(types);
    } catch (error) {
      next(error);
    }
   
}

module.exports = new UserController();
