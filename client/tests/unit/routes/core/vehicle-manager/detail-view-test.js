import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core/vehicle-manager/vehicles', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:core/vehicle-manager/vehicles');
    assert.ok(route);
  });
});
