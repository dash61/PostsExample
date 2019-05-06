import { module, test } from 'qunit';
import { setupRenderingTest, setupTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
//import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | App component exists', function(hooks) {
  //setupMirage(hooks);
  setupTest(hooks);

  test('component app exists', async function(assert) {
    let component = this.owner.lookup('component:app');
    assert.ok(component);
  });
});

module('Integration | App component renders', function(hooks) {
  setupRenderingTest(hooks);

  test('render test', async function(assert) {
    await render(hbs`{{app}}`);
    console.log("app test - this.element=", this.element);
    assert.ok(this.element.querySelector('h1'));
  });
});
