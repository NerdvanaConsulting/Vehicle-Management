/************************************************
 * Application:  Vehicle Manager
 * File:  app/routes/router.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Feature: 0 - Baseline functionality
 * Purpose: This is the route list for the application.
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 * - 24 Dec 2018 - Added Core and Dashboard routes
 ***********************************************/
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('core', function() {
    this.route('dashboard');
    this.route('vehicle-manager', function() {
      this.route('list-view');
      this.route('vehicles', { path: '/vehicles/:id'});
      this.route('edit-vehicle', { path: '/edit-vehicle/:id'});
    });
    this.route('fuel-manager', function() {
      this.route('list-fillups');
      this.route('fillups');
    });
  });
});

export default Router;
