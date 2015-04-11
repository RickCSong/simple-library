Template['books'].helpers({
  books: function() {
    if (this._id) {
      return Books.find({ categoryId: this._id });
    } else {
      return Books.find();
    }
  }
});

Template['books'].events({
});

Template['books'].rendered = function() {
  // setTimeout(function() {
  //   console.log('HERE!!!');
  //   $('').masonry({
  //     itemSelector: '.item',
  //     gutter:10
  //   });
  // }, 3500);
};

Template['book'].helpers({});

Template['book'].events({});