Template['modifyBookModal'].helpers({
  header: function() {
    if (Session.get('modifyBookModal.doc')) {
      return "Modify book";
    } else {
      return "Add a new book";
    }
  },
  type: function() {
    return Session.get('modifyBookModal.doc') ? 'update' : 'insert';
  },
  doc: function() {
    return Session.get('modifyBookModal.doc');
  },
  showDeleteButton: function() {
    return !!Session.get('modifyBookModal.doc');
  },
  categoryOptions: function() {
    return Categories.find().map(function(c) {
      return { label: c.name, value: c._id };
    });
  }
});

Template['modifyBookModal'].events({
  'click #remove-book-button': function(event, template) {
    var book = Session.get('modifyBookModal.doc');
    Books.remove(book._id);
    $('#modify-book-modal').modal('hide');
  }
});

Template['modifyBookModal'].onRendered(function() {
  $('#modify-book-modal').modal({
    detachable: false,
    onShow: function() {
      AutoForm.resetForm("modifyBookForm");
    }
  });
});