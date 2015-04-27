Meteor.startup(function () {
  if (Categories.find().count() === 0) {
    Categories.insert({ name: 'Tech' });
    Categories.insert({ name: 'Design' });
    Categories.insert({ name: 'Business' });
    Categories.insert({ name: 'Science' });
    Categories.insert({ name: 'Scifi' });
    Categories.insert({ name: 'Psychology' });
  }

  var techCategory = Categories.findOne({name: 'Tech'});
  var designCategory = Categories.findOne({name: 'Design'});
  var businessCategory = Categories.findOne({name: 'Business'});
  var scienceCategory = Categories.findOne({name: 'Science'});
  var scifiCategory = Categories.findOne({name: 'Scifi'});
  var psychologyCategory = Categories.findOne({name: 'Psychology'});


  if(Books.find().count() === 0) {
    // Technology books
    Books.insert({
      title: 'Ethical Hacking and Penetration Testing Guide',
      format: 'Book',
      description: 'Requiring no prior hacking experience, Ethical Hacking and Penetration Testing Guide supplies a complete introduction to the steps required to complete a penetration test, or ethical hack, from beginning to end. You will learn how to properly utilize and interpret the results of modern-day hacking tools, which are required to complete a penetration test.',
      categoryId: techCategory._id
    });

    Books.insert({
      title: 'Security without Obscurity: A Guide to Confidentiality, Authentication, and Integrity',
      format: 'E-Book',
      description: 'The traditional view of information security includes the three cornerstones: confidentiality, integrity, and availability; however the author asserts authentication is the third keystone. As the field continues to grow in complexity, novices and professionals need a reliable reference that clearly outlines the essentials. Security without Obscurity: A Guide to Confidentiality, Authentication, and Integrity fills this need.',
      categoryId: techCategory._id
    });

    Books.insert({
      title: 'Detailed Designs and Beautiful Patterns',
      format: 'Book',
      description: "The Detailed Designs and Beautiful Patterns Adult Coloring Book is full of original, detailed designs and patterns for you to relax and color. Color the intricate designs and find yourself focused, centered, and at peace. The images are printed on large 8.5 x 11 high quality paper so you'll have plenty of space to work on the details and be creative. After you are finished, you'll have lovely works of art that are worthy of hanging on the wall.",
      categoryId: designCategory._id
    });
  }
});
