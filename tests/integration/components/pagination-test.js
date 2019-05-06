import { module, test } from 'qunit';
import { setupRenderingTest, setupTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Pagination component exists', function(hooks) {
  setupTest(hooks);

  test('component pagination exists', async function(assert) {
    let component = this.owner.lookup('component:pagination');
    assert.ok(component);
  });
});

module('Integration | Pagination component renders', function(hooks) {
  setupRenderingTest(hooks);

  test('render test', async function(assert) {
    await render(hbs`{{pagination}}`);
    assert.ok(this.element.querySelector('i'));
  });
});
