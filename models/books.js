Books = new Mongo.Collection('books');

Books.attachSchema(
  new SimpleSchema({
    title: {
      type: String
    },
    imageId: {
      type: String,
      optional: true,
      autoform: {
        afFieldInput: {
          type: 'cfs-file',
          collection: 'images'
        }
      },
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
    insert : function (userId, doc) {
      return true;
    },
    update : function (userId, doc, fieldNames, modifier) {
      if (!userId) {
        throw new Meteor.Error("not-authorized");
      }
      return true;
    },
    remove : function (userId, doc) {
      if (!userId) {
        throw new Meteor.Error("not-authorized");
      }
      return true;
    }
  });
}