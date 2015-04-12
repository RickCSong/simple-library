Books = new Mongo.Collection('books');

Books.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    imageUrl: {
      type: String,
      optional: true
    },
    format: {
      type: String,
      allowedValues: ['Book', 'E-Book', 'Audiobook']
    },
    description: {
      type: String,
      optional: true
    },
    categoryId: {
      type: String,
      index: true
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Books.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
