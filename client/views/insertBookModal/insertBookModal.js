Template['insertBookModal'].helpers({
  categoryOptions: function() {
    return Categories.find().map(function(c) {
      return { label: c.name, value: c._id };
    });
  }
});

Template['insertBookModal'].events({

});
