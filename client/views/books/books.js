Template['books'].helpers({

});

Template['books'].events({

});

Template['book'].helpers({
  image: function() {
    return Images.findOne({
      _id: this.imageId
    });
  },
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
  'click .like.icon': function(event, template) {
    Meteor.call("toggleLike", this._id);
  },
  'click .edit.icon': function(event, template) {
    Session.set('modifyBookModal.doc', this);
    $('#modify-book-modal').modal('show');
  }
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

Template['book'].onDestroyed(function() {
  $('.books').masonry({
    itemSelector: '.book',
    isFitWidth: true,
    gutter: 20
  });
  $('.books').masonry('remove', this.$('.book'));
  $('.books').masonry();
});
