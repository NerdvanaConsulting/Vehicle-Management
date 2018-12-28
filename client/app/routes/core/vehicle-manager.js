/************************************************
 * Application:  Vehicle Manager
 * File:  /app/core/vehicle-manager.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Issue: 17 - Route for vehicle manager
 * Purpose:
 * Modification History:
 * - 25 Dec 2018 - Initial build (no modifications)
 ***********************************************/
import Route from '@ember/routing/route';

export default Route.extend({
   model () {
      return this.store.findAll('vehicle');
   }
});
