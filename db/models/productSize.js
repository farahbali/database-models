const { Model } = require('objection');

class ProductSize extends Model {
  static get tableName() {
    return 'product_size';
  }

  static get relationMappings() {
    const Product = require('./product');
    const Size = require('./size');

    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'product_size.product_id',
          to: 'product.id'
        }
      },
      size: {
        relation: Model.BelongsToOneRelation,
        modelClass: Size,
        join: {
          from: 'product_size.size_id',
          to: 'size.id'
        }
      }
    };
  }
}

module.exports = ProductSize;
