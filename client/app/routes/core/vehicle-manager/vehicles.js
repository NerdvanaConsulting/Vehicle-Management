import Route from '@ember/routing/route';

export default Route.extend({
   init() {
      this._super(...arguments);
   },

   model(params) {
      return this.store.findRecord('vehicle', params.id ) ;
   },
   actions: {
      click() {
         this.get('router').transitionTo('/core/vehicle-manager/edit-vehicle/' + this.id);
       },   
   }

});


