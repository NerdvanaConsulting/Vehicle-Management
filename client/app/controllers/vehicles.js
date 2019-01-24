import Controller from '@ember/controller';

export default Controller.extend({
//   model(params) {
//      return this.store.findRecord('vehicle', params.id );
//   },
   actions: {
      filterById(param) {
         if (param !== '') {
            return this.store.query('vehicles', { id: param });
      } else {
         return this.store.findAll('vehicles');
      }
   }
}

});
