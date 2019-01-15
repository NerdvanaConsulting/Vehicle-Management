import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | core/fuel-manager', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:core/fuel-manager');
    assert.ok(route);
  });
});
