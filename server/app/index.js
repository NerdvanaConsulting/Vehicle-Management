#!/usr/bin/env node
/************************************************
 * Application:  Vehicle Manager
 * File:  server/app/index.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Feature: 0 - Baseline functionality
 * Purpose: Server index behavior
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 ***********************************************/

const blueprint = require ('@onehilltech/blueprint');

return blueprint.createApplicationAndStart (__dirname)
  .catch (err => console.error (err));
