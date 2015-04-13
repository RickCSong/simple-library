Likes = new Mongo.Collection('likes');

Likes.attachSchema(
  new SimpleSchema({
    userId: {
      type: String
    },
    bookId: {
      type: String
    }
  })
);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Likes.allow({
    insert : function () {
      return false;
    },
    update : function () {
      return false;
    },
    remove : function () {
      return false;
    }
  });
}

Meteor.methods({
  toggleLike: function(bookId) {
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(bookId, String);

    var userId = Meteor.userId();
    var curLike = Likes.findOne({
      userId: userId,
      bookId: bookId
    });

    if (!curLike) {
      Likes.insert({
        userId: userId,
        bookId: bookId
      });
    } else {
      Likes.remove({
        userId: userId,
        bookId: bookId
      });
    }
  }
});