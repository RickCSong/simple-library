Meteor.subscribe('books');
Meteor.subscribe('categories');

Router.route('/', function () {
  this.render('home');

  SEO.set({ title: 'Books - ' + Meteor.App.NAME });
});

Router.route('categories/:lowerName', function() {
  this.render('home', {
    data: function() {
      return Categories.findOne({lowerName: this.params.lowerName});
    }
  });
}, {
  name: 'categories.show'
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
