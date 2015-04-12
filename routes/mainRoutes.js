Meteor.subscribe('books');
Meteor.subscribe('categories');
Meteor.subscribe('likes');

BooksController = RouteController.extend({
  data: function() {
    var selectedCategory, categories, books;

    selectedCategory = Categories.findOne({slug: this.params.slug});
    categories = Categories.find();

    if (selectedCategory) {
      books = Books.find({ categoryId: selectedCategory._id });
    } else {
      books = Books.find();
    }

    return {
      selectedCategory: selectedCategory,
      categories: categories,
      books: books
    };
  }
});

Router.route('/', function () {
  this.render('home');

  SEO.set({ title: 'Books - ' + Meteor.App.NAME });
}, {
  name: 'home',
  controller: 'BooksController'
});

Router.route('categories/:slug', function() {
  this.render('home');

  var selectedCategory = Categories.findOne({slug: this.params.slug});
  SEO.set({ title: selectedCategory.name + ' Books - ' + Meteor.App.NAME });
}, {
  name: 'categories.show',
  controller: 'BooksController'
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
