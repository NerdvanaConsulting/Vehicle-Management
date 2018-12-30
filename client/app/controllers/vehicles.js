import Controller from '@ember/controller';

export default Controller.extend({
   model(params) {
      return this.store.findRecord('vehicle', params.id );
   }
});
