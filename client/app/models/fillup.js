/************************************************
 * Application:  Vehicle Manager
 * File:  app/models/fillup.js
 * Author: Nerdvana Consulting
 * Creation Date: 15 Jan 2019
 * Requirement 34 - Fillup Model
 * Purpose: This is the model for a fill-up
 * Modification History:
 * - 15 Jan 2019 - Initial build with baseline properties.
 ***********************************************/
import DS from 'ember-data';

export default DS.Model.extend({
   vehicle: DS.belongsTo('vehicle'),
   filldate: DS.attr('string'),
   mileage: DS.attr('number'),
   trip: DS.attr('number'),
   amount: DS.attr('number'),
   rate: DS.attr('number'),
   total: DS.attr('number'),
   mpg: DS.attr('number'),
});
