import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | eq', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function(assert) {
    const str1 = "abc123";
    const str2 = "abc123";
    this.set('string1', str1);
    this.set('string2', str2);

    await render(hbs`{{eq string1 string2}}`);

    assert.equal(this.element.textContent.trim(), 'abc123');
  });
});
