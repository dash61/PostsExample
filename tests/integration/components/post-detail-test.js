import { module, test } from 'qunit';
import { setupRenderingTest, setupTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Post-detail component exists', function(hooks) {
  setupTest(hooks);

  test('component post-detail exists', async function(assert) {
    let component = this.owner.lookup('component:post-detail');
    assert.ok(component);
  });
});

module('Integration | Post-detail component renders', function(hooks) {
  setupRenderingTest(hooks);

  test('render test', async function(assert) {
    await render(hbs`{{post-detail}}`);
    assert.ok(this.element.querySelector('h3'));
  });
});
