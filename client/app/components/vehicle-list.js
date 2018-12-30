/************************************************
 * Application:  Vehicle Manager
 * File:  /app/components/vehicle-list.js
 * Author: Nerdvana Consulting
 * Creation Date: 28 Dec 2018
 * Feature: 23 - Component Vehicle List for vehicles
 * Purpose:  Provides for acceptance tests for all vehicle-related functionality
 * Modification History:
 * - 25 Dec 2018 - Initial build
 ***********************************************/
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
   router: service(),
   init() {
      this._super(...arguments);
   },

   click() {
      this.get('router').transitionTo('/core/vehicle-manager/vehicles/' + this.id);
    },
   actions: {

   }
});
