import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

/* ember-ajax stuff: perhaps put in a service called 'ajax',
   so you have app/services/ajax.js:
   (also - you could do this inside a component)

import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export default AjaxService.extend({
  ajax: Ember.inject.service(),
  host: BASE_URL,
  contentType: 'application/json; charset=utf-8',
  actions: {
    getAllPosts() {
      return this.get('ajax').request('/posts', {
        method: 'GET'
      });
    },
    getOnePost(id) {
      return this.get('ajax').request('/posts/'+id.toString(), {
        method: 'GET'
      });
    }
  }});

// note that:
request('/posts'); // will get https://jsonplaceholder.typicode.com/posts

// Usage of the service, somewhere:
service?.getAllPosts().then (function (result) {
  let data = JSON.parse(result); // need if json is stringified coming in
  _.each(data, function(el) {
    posts.pushObject(el);
  });
})
.catch(function (error) {
  //blah blah
});

Can grab all posts in an array, and then do:
getOnePost(id) {
  return posts.findBy('id', id);
}

For DS:
use store.peekRecord('band', 1):
- never triggers a reload of data
- rtns record if found
- rtns null if not found
Don't use findRecord or findAll or query, will trigger refetch or promise if not found.
use store.peekAll('band') - acts same as peekRecord.
The 'model' hook returns a promise but blocks rendering the page.

Pagination info
===============
Can do in controller (property defs):
  hasPrevPage: Ember.computed.gt('pageNumber', 1),
  hasNextPage: Ember.computed.('pageNumber', 'model.pageCount', function() {
    return this.get('pageNumber') < this.get('model.pageCount');
  }),
  ...

In template hbs file (pageNumber defined in a route, or model? or comp?):
<div>
  {{#if hasPrevPage}}
    {{#link-to (pageNumber=(dec pageNumber)) class=""}}
      <span class="glyphicon glyphicon-arrow-left"></span>
    {{/link-to}}
  {{/if}}
  {{#if hasNextPage}}
    {{#link-to (pageNumber=(inc pageNumber)) class=""}}
      <span class="glyphicon glyphicon-arrow-right"></span>
    {{/link-to}}
  {{/if}}
</div>
*/
