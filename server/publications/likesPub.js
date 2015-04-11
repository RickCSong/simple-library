Meteor.publish('likes', function () {
  return Likes.find();
});
