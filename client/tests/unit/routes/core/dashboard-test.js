/************************************************
 * Application:  Vehicle Manager
 * File:  /tests/unit/routes/dashboard.js
 * Author: Nerdvana Consulting
 * Creation Date: 24 Dec 2018
 * Purpose: Unit testing for core/dashboard
 * Modification History:
 * - 23 Dec 2018 - Initial build (no modifications)
 ***********************************************/
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core/dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:core/dashboard');
    assert.ok(route);
  });
});
