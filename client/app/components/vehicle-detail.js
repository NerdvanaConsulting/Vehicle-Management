import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
   classNames: ['mdc-card mdc-card--outlined'],
   router: service(),
   init() {
      this._super(...arguments);
   },

   click() {
      this.get('router').transitionTo('/core/vehicle-manager/edit-vehicle/' + this.id);
    },
   actions: {

   }

});
