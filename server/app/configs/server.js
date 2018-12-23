/************************************************
 * Application:  Vehicle Manager
 * File:  /server/app/configs/server.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Feature: 0 - Baseline functionality
 * Purpose:  Server settings (client, middleware, server)
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 ***********************************************/
module.exports = {
  protocols : {
    http : {
      port: 5000
    }
  },

  middleware : {
    validator  : { },
    bodyParser : {
      urlencoded : { extended: false },
      json : { }
    },

    morgan: {
      format: 'dev',
      immediate: true
    }
  }
};
