import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core/vehicle-manager/edit-vehicle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:core/vehicle-manager/edit-vehicle');
    assert.ok(route);
  });
});
