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
});

Template['book'].onRendered(function() {
  $('.books').masonry({
    itemSelector: '.book',
    isFitWidth: true,
    gutter: 20
  });

  var self = this;
  var masonryElements = $('.books').masonry('getItemElements');
  var masonryBookIds = _.map(masonryElements, function(elt) { return elt.id; });
  var currentBookId = self.$('.book').attr('id');

  if (!_.contains(masonryBookIds, currentBookId)) {
    $('.books').masonry('appended', self.$('.book'));
  }
  self.$('.book').removeClass('hidden');
  self.$('.book').imagesLoaded(function() {
    $('.books').masonry();
  });
});

Template['book'].destroyed = (function() {
  $('.books').masonry({
    itemSelector: '.book',
    isFitWidth: true,
    gutter: 20
  });
  $('.books').masonry('remove', this.$('.book'));
  $('.books').masonry();
});
