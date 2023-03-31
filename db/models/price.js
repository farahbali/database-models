const { Model } = require('objection');

class Price extends Model {
  static get tableName() {
    return 'price';
  }
  static get relationMappings() {
    const Type = require('./productSize');
    const Size = require('./size');
    return {
      typesHavePrice: {
        relation: Model.HasManyRelation,
        modelClass: Type,
        join: {
          from: 'price.id',
          to: 'type.price_id'
        }
      },
      sizesHavePrice: {
        relation: Model.HasManyRelation,
        modelClass: Size,
        join: {
          from: 'price.id',
          to: 'size.price_id'
        }
      }
    };
  }
}


module.exports = Price;
