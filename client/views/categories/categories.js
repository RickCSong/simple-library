Template['categories'].helpers({

});

Template['categories'].events({
  'click #add-category-button': function() {
    $('#add-category-form').modal('show');
  }
});

Template['category'].helpers({
  isActive: function() {
    if (Template.parentData().selectedCategory) {
      var selectedCategory = Template.parentData().selectedCategory;
      return this._id == selectedCategory._id ? "active" : "";
    } else {
      return "";
    }
  }
});

Template['category'].events({

});
