import { module, test } from 'qunit';
import { setupTest } from 'shitty-jobs/tests/helpers';

module('Unit | Controller | jobs', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:jobs');
    assert.ok(controller);
  });
});
