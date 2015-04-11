Categories = new Mongo.Collection('categories');

Categories.attachSchema(
  new SimpleSchema({
    slug: {
      type: String,
      index: true,
      unique: true,
      autoValue: function() {
        return this.field('name').value.toLowerCase();
      }
    },
    name: {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Categories.allow({
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
