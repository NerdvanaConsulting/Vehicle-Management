/************************************************
 * Application:  Vehicle Manager
 * File:  /tests/test-helper.js
 * Author: Nerdvana Consulting
 * Creation Date: 23 Dec 2018
 * Feature: 0 - Baseline functionality
 * Purpose:
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 ***********************************************/
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
