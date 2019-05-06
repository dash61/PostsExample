import { module, test } from 'qunit';
import { setupRenderingTest, setupTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Posts component exists', function(hooks) {
  setupTest(hooks);

  test('component posts exists', async function(assert) {
    let component = this.owner.lookup('component:posts');
    assert.ok(component);
  });
});

module('Integration | Posts component renders', function(hooks) {
  setupRenderingTest(hooks);

  test('render test', async function(assert) {
    await render(hbs`{{posts}}`);
    assert.ok(this.element.querySelector('li'));
  });
});
