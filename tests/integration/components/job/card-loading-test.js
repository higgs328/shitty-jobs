import { module, test } from 'qunit';
import { setupRenderingTest } from 'shitty-jobs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | job/card-loading', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Job::CardLoading />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Job::CardLoading>
        template block text
      </Job::CardLoading>
    `);

    assert.dom().hasText('template block text');
  });
});
