import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | dashboard', function(hooks) {
  setupApplicationTest(hooks);

  test('Should show dashboard as the home page', async function (assert) {
    await visit('/core/dashboard');
    assert.equal(currentURL(), '/core/dashboard');
  });

  test ('Should link to the Vehicle Page', async function (assert) {
  });
  test ('Should link to the Fill-up Page', async function (assert) {
  });
  test ('Should link to the Expenses Page', async function (assert) {
  });
  test ('Should link to the Locations Page', async function (assert) {
  });

});


