import { module, test } from 'qunit';
import { setupRenderingTest } from 'shitty-jobs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | job-search', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<JobSearch />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <JobSearch>
        template block text
      </JobSearch>
    `);

    assert.dom().hasText('template block text');
  });
});
