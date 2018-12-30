/************************************************
 * Application:  Vehicle Manager
 * File:  app/adapters/application.js
 * Author: Nerdvana Consulting
 * Creation Date: 28 Dec 2018
 * Requirement 22 - Sample Data
 * Purpose: Application adapter to use api for Mirage
 * Modification History:
 * - 28 Dec 2018 - Initial build
 ***********************************************/
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
   namespace: 'api'
});
