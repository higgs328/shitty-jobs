import { module, test } from 'qunit';
import { setupRenderingTest } from 'shitty-jobs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | job-filter/dropdown/dropdown-option',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<JobFilter::Dropdown::DropdownOption />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <JobFilter::Dropdown::DropdownOption>
        template block text
      </JobFilter::Dropdown::DropdownOption>
    `);

      assert.dom().hasText('template block text');
    });
  },
);