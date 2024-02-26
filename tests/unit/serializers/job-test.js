import { module, test } from 'qunit';

import { setupTest } from 'shitty-jobs/tests/helpers';

module('Unit | Serializer | job', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('job');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('job', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
