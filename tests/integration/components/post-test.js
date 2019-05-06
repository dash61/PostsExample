import { module, test } from 'qunit';
import { setupRenderingTest, setupTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Post component exists', function(hooks) {
  setupTest(hooks);

  test('component post exists', async function(assert) {
    let component = this.owner.lookup('component:post');
    assert.ok(component);
  });
});

module('Integration | Post component renders', function(hooks) {
  setupRenderingTest(hooks);

  test('render test', async function(assert) {
    await render(hbs`{{post}}`);
    assert.ok(this.element.querySelector('button'));
  });
});
