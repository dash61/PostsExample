import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pagination', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{pagination}}`);
    assert.equal(this.element.textContent.trim(), '');

    const selector = find('#nextPageBtn');
    await click(selector);

    // Template block usage:
    await render(hbs`
      {{#pagination}}
        template block text
      {{/pagination}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
//assert.ok(this.element.querySelector('button').disabled, 'Button is disabled');
