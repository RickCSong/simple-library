Books = new Mongo.Collection('books');

Books.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    format: {
      type: String
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
