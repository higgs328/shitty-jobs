import { module, test } from 'qunit';

import { setupTest } from 'shitty-jobs/tests/helpers';

module('Unit | Adapter | job', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:job');
    assert.ok(adapter);
  });
});
