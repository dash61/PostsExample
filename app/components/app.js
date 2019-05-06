// Main application code.
//
// Since this is the parent of all the other items, it will hold the data and
// pass it down to child components. This class will also receive callbacks
// from child components when buttons or links are pressed.
//

import Component from '@ember/component';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const POSTS_URL = '/posts';
const USERS_URL = '/users/';


export default Component.extend({
  ajax: service(),      // inject ajax as a service

  async init() {
    this._super(...arguments);
    const data = await this.get('ajax').request(BASE_URL + POSTS_URL,
      { method: 'GET' });
    this.set('totalPosts', data.length);
    this.set('numPages', Math.ceil(this.totalPosts / this.numPostsPerPage));
    this.set('allPosts', data);
    this.loadSubSetOfPosts();
  },

  allPosts: A([]),        // gathered from https://jsonplaceholder.typicode.com
  somePosts: A([]),       // just those we are viewing now
  totalPosts: 0,          // total of allPosts
  numPages: 1,            // number of pages we can paginate through
  numPostsPerPage: 10,    // max; could make a component to change this
  selectedPostId: 0,      // non-zero if user clicks a post title
  selectedPostData: null, // to be filled with post info that user clicked on
  userData: null,         // data of user associated with a selected post
  pageToShow: 1,          // changes if user paginates; starts at 1

  // Helper function to load a 'page' of posts from allPosts into somePosts.
  // somePosts gets passed down to child components.
  loadSubSetOfPosts () {
    let start = ((this.pageToShow - 1) * this.numPostsPerPage);
    let numLastPage = Math.min(this.totalPosts-start, this.numPostsPerPage);
    let end = start + numLastPage;
    let subSet = this.allPosts.slice(start, end);
    this.set('somePosts', subSet);
  },

  actions: {
    showFirstPage () {
      this.set('pageToShow', 1);
      this.loadSubSetOfPosts();
    },
    showPrevPage () {
      if (this.pageToShow > 1)
      {
        const prevPage = this.pageToShow - 1;
        this.set('pageToShow', prevPage);
        this.loadSubSetOfPosts();
      }
    },
    showNextPage () {
      if (this.pageToShow < this.numPages)
      {
        const nextPage = this.pageToShow + 1;
        this.set('pageToShow', nextPage);
        this.loadSubSetOfPosts();
      }
    },
    showLastPage () {
      this.set('pageToShow', this.numPages);
      this.loadSubSetOfPosts();
    },

    // This function fires if the user clicks on a post title or post id.
    // It will show a slide-out window that holds specific data on that post.
    async showDetailWindow (id) {
      // Get the post for the id passed in.
      const onePost = this.somePosts.find((item) => {
        return item.id === id;
      });

      // Query the detailed user data from the server.
      const data = await this.get('ajax').request(BASE_URL + USERS_URL +
        onePost.userId.toString(), { method: 'GET' });

      this.set('userData', data);
      this.set('selectedPostId', id);
      this.set('selectedPostData', onePost);
    },

    // Get rid of the slide-out window.
    hideDetailWindow () {
      this.set('selectedPostId', 0);
    },
  },
});
