import Controller from '@ember/controller';

export default Controller.extend({
   actions: {
      showVehicles(param) {
         if (param === '') {
            this.replaceRoute('list-view', ...args);
         }
         alert('showVehicles');
//         this.transitionToRoute('core.vehicle-manager/list-view');
         this.transitionTo('/core/vehicle-manager/list-view', ...arguments);
      }
   }
});
