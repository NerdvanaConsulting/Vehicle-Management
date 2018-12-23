/************************************************
 * Application:  Vehicle Manager
 * File:  app/app.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Feature: 0 - Baseline functionality
 * Purpose:
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 ***********************************************/
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
