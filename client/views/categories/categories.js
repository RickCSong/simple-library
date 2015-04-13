Template['categories'].helpers({
  isEverything: function() {
    if (this.selectedCategory) {
      return "";
    } else {
      return "active";
    }
  }
});

Template['categories'].events({

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
