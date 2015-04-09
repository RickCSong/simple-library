Router.route('/', function () {
  this.render('books', { to: 'books' });
  this.render('categories', { to: 'categories' });

  SEO.set({ title: 'Home - ' + Meteor.App.NAME });
});

Router.route('/books', {});

// Router.route('/books', {
//   layoutTemplate: 'basicLayout',
//   path: '/:name',
//   data: function() {
//     console.log(this.params.name);
//     Session.set('category', this.params.name);
//   },
//   template: 'basicLayout'
// });