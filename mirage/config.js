export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  //this.urlPrefix = 'https://jsonplaceholder.typicode.com';
  this.namespace = 'https://jsonplaceholder.typicode.com';
  this.timing = 400;

  this.get('/', () => {
    return {
      posts: [
        {id: 1, title: "post 1", body: "body of post 1"},
        {id: 2, title: "post 2", body: "body of post 2"},
        {id: 3, title: "post 3", body: "body of post 3"},
        {id: 4, title: "post 4", body: "body of post 4"},
        {id: 5, title: "post 5", body: "body of post 5"},
        {id: 6, title: "post 6", body: "body of post 6"},
        {id: 7, title: "post 7", body: "body of post 7"},
        {id: 8, title: "post 8", body: "body of post 8"},
        {id: 9, title: "post 9", body: "body of post 9"},
        {id: 10, title: "post 10", body: "body of post 10"},
        {id: 11, title: "post 11", body: "body of post 11"},
        {id: 12, title: "post 12", body: "body of post 12"}
      ]
    };
  });

}
