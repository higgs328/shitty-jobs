import { module, test } from 'qunit';
import { setupRenderingTest } from 'shitty-jobs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | site/header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Site::Header />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Site::Header>
        template block text
      </Site::Header>
    `);

    assert.dom().hasText('template block text');
  });
});
