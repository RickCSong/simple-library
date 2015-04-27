Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Images.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  download: function() {
    return true;
  }
});