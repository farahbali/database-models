const { Model } = require('objection');

class Type extends Model {
  static get tableName() {
    return 'type';
  }
  static get relationMappings() {
    const Product = require('./product');
    const Price = require('./price');
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'type.product_id',
          to: 'product.id'
        }
      },
      price: {
        relation: Model.BelongsToOneRelation,
        modelClass: Price,
        join: {
          from: 'type.price_id',
          to: 'price.id'
        }
      }
    };
  }
}
console.log(Type.relationMappings);
module.exports = Type;
