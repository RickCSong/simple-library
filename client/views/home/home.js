Template['home'].helpers({
});

Template['home'].events({
  'click #insert-book-button': function() {
    Session.set('modifyBookModal.doc', null);
    $('#modify-book-modal').modal('show');
  }
});