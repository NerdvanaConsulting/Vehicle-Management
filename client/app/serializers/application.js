import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
   keyForAttribute: function(attr, method) {
      return Ember.String.underscore(attr);
   }
   //   primaryKey: '_id',
//   serializeId: function(id) {
//     return id.toString();
//   }
});
 