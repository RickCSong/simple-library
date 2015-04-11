Template['categories'].helpers({
  categories: function() {
    return Categories.find({});
  }
});

Template['categories'].events({
});

Template['category'].helpers({
  isActive: function() {
    if (Template.parentData()) {
      var parentLowerName = Template.parentData().lowerName;
      return this.lowerName == parentLowerName ? "active" : "";
    } else {
      return "";
    }
  }
});

Template['category'].events({
});
