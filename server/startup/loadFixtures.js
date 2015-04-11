Meteor.startup(function () {
  if (Categories.find().count() === 0) {
    Categories.insert({ name: 'Tech' });
    Categories.insert({ name: 'Design' });
    Categories.insert({ name: 'Business' });
    Categories.insert({ name: 'Science' });
    Categories.insert({ name: 'Scifi' });
    Categories.insert({ name: 'Psychology' });
  }

  techCategory = Categories.findOne({name: 'Tech'});
  designCategory = Categories.findOne({name: 'Design'});
  psychologyCategory = Categories.findOne({name: 'Psychology'});

  if(Books.find().count() === 0) {
    Books.insert({
      title: 'Eloquent JavaScript',
      url: 'https://yuq.me/users/41/792/YO81mXVMpK.png',
      format: 'AudioBook',
      categoryId: techCategory._id
    });

    Books.insert({
      title: 'Beign Mortal',
      url: 'http://ecx.images-amazon.com/images/I/91E6exaOufL.jpg',
      format: 'Ebook',
      categoryId: psychologyCategory._id
    });

    Books.insert({
      title: 'Principles Of Web Design',
      url: 'https://yuq.me/users/27/445/MXtELWFw17.jpg',
      format: 'Ebook',
      categoryId: designCategory._id
    });
  }
});
