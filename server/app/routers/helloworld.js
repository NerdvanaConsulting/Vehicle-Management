/************************************************
 * Application:  Vehicle Manager
 * File:  app/routers/helloworld.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Feature: 0 - Baseline functionality
 * Purpose:
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 ***********************************************/
module.exports = {
  '/' : {
    get  : { view   : 'helloworld.pug' },
    post : { action : 'helloworld@echoName'},
  }
};
