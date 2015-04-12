Template['books'].helpers({

});

Template['books'].events({

});

Template['book'].helpers({
  liked: function() {
    var curlike = Likes.findOne({
      userId: Meteor.userId(),
      bookId: this._id
    });

    return (curlike ? "active" : "");
  },
  numLikes: function() {
    var numLikes = Likes.find({bookId: this._id }).count();

    if (numLikes == 1) {
      return "1 Like";
    } else {
      return numLikes + " Likes";
    }
  }
});

Template['book'].events({
  'click .like': function(event, template) {
    if (!Meteor.user()) {
      return;
    }
    Meteor.call("toggleLike", this._id);
  }
});

Template['books'].onRendered(function() {
  $('.books').masonry({
    itemSelector: '.book',
    gutter: 20
  });
});

Template['book'].onRendered(function() {
  var self = this;
  $('.books').masonry('appended', self.$('.book'));
  self.$('.book').imagesLoaded(function() {
    $('.books').masonry();
  });
});

Template['book'].destroyed = (function() {
  $('.books').masonry('remove', this.$('.book'));
  $('.books').masonry();
});
