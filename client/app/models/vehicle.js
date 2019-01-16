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
 * - 29 Dec 2018 - removed attribute section, to keep everything at the base level.
 ***********************************************/
import DS from 'ember-data';

export default DS.Model.extend({
   type: DS.attr('string'),
   vin: DS.attr('string'),
   vehmake: DS.attr('string'),
   vehmodel: DS.attr('string'),
   vehyear: DS.attr('number'),
   vehcolor: DS.attr('string'),
   vehmileage: DS.attr('number'),
   vehimage: DS.attr(''),
   fillup: DS.hasMany('fillup')
});
