import { module, test } from 'qunit';
import { setupRenderingTest } from 'shitty-jobs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | site/footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Site::Footer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Site::Footer>
        template block text
      </Site::Footer>
    `);

    assert.dom().hasText('template block text');
  });
});
