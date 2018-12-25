/************************************************
 * Application:  Vehicle Manager
 * File:  /tests/vehicle-manager.js
 * Author: Nerdvana Consulting
 * Creation Date: 25 Dec 2018
 * Feature: 8 - User shall be able to manage vehicles
 * Purpose:  Provides for acceptance tests for all vehicle-related functionality
 * Modification History:
 * - 25 Dec 2018 - Initial build
 ***********************************************/
import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | vehicle manager', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /vehicle-manager', async function(assert) {
    await visit('/vehicle-manager');

    assert.equal(currentURL(), '/vehicle-manager');
  });
});
