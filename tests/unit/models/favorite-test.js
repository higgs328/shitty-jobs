import { module, test } from 'qunit';

import { setupTest } from 'shitty-jobs/tests/helpers';

module('Unit | Model | favorite', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('favorite', {});
    assert.ok(model);
  });
});
