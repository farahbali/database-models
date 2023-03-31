const { Model } = require('objection');

class Product extends Model {
  static get tableName() {
    return 'product';
  }

  static get relationMappings() {
    const Type = require('./type');
    const ProductSize = require('./productSize');
    const Size = require('./size');

    return {
      types: {
        relation: Model.HasManyRelation,
        modelClass: Type,
        join: {
          from: 'product.id',
          to: 'type.product_id'
        }
      },
      sizes: {
        relation: Model.ManyToManyRelation,
        modelClass: Size,
        join: {
          from: 'product.id',
          through: {
            from: 'product_size.product_id',
            to: 'product_size.size_id'
          },
          to: 'size.id'
        }
      }
    };
  }
}

module.exports = Product;
