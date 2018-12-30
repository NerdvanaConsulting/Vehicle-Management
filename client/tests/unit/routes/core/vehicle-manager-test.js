/************************************************
 * Application:  Vehicle Manager
 * File:  /tests/unit/routes/core/vehicle-manager.js
 * Author: Nerdvana Consulting
 * Creation Date: 25 Dec 2018
 * Purpose:  Provides for unit testing for vehicle manger
 * Modification History:
 * - 25 Dec 2018 - Initial build (no modifications)
 ***********************************************/
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core/vehicle-manager', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:core/vehicle-manager');
    assert.ok(route);
  });
});
