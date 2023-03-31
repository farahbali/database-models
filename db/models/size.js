const { Model } = require('objection');
class Size extends Model {
  static get tableName() {
    return 'size';
  }
  static get relationMappings() {
    const ProductSize = require('./productSize');
    return {
      products: {
        relation: Model.ManyToManyRelation,
        modelClass: require('./product'),
        join: {
          from: 'size.id',
          through: {
            from: 'product_size.size_id',
            to: 'product_size.product_id'
          },
          to:'product.id'
        }
      },
      price: {
        relation: Model.BelongsToOneRelation,
        modelClass: require('./price'),
        join: {
          from: 'size.price_id',
          to:'price.id'
        }
      }
    };
  }
}
module.exports = Size;
