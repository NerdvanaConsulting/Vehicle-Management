/************************************************
 * Application:  Vehicle Manager
 * File:  app/models/vehicle.js
 * Author: Nerdvana Consulting
 * Creation Date: 26 Dec 2018
 * Requirement 20 - Vehicle Model
 * Purpose: This is the model for a vehicle
 * Modification History:
 * - 26 Dec 2018 - Initial build (no modifications)
 * - 28 Dec 2018 - Removed id attribute 
 ***********************************************/
import DS from 'ember-data';

export default DS.Model.extend({
   type: DS.attr('string'),
   attributes: {
      vin: DS.attr('string'),
      vehMake: DS.attr('string'),
      vehModel: DS.attr('string'),
      vehYear: DS.attr('number'),
      vehColor: DS.attr('string'),
   }
});
