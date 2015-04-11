Meteor.subscribe('books');
Meteor.subscribe('categories');
Meteor.subscribe('likes');

Router.route('/', function () {
  this.render('home');

  SEO.set({ title: 'Books - ' + Meteor.App.NAME });
});

Router.route('categories/:slug', function() {
  this.render('home');
}, {
  name: 'categories.show',
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

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
