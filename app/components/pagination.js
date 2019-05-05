import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  hasPrevPage: computed.gt('currentPage', 1),
  hasNextPage: computed('currentPage', 'pageCount', function() {
    return this.currentPage < this.pageCount;
  }),
});
