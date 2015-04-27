function textInputAtts() {
  var atts = _.clone(this.atts);
  delete atts.collection;
  // we want the schema key tied to the hidden file field only
  delete atts["data-schema-key"];
  atts["class"] = (atts["class"] || "") + " form-control";
  return atts;
}

function fileInputAtts() {
  return {'data-schema-key': this.atts["data-schema-key"]};
}

Template.cfsFileField_semanticUI.helpers({
  textInputAtts: textInputAtts,
  fileInputAtts: fileInputAtts
});

var hookTracking = {};
Template.cfsFileField_semanticUI.rendered = function () {
  var formId;

  // backwards compatibility with pre 5.0 autoform
  if (typeof AutoForm.find === 'function') {
    formId = AutoForm.find().formId;
  } else {
    formId = AutoForm.getFormId();
  }

  // By adding hooks dynamically on render, hopefully any user hooks will have
  // been added before so we won't disrupt expected behavior.
  if (!hookTracking[formId]) {
    hookTracking[formId] = true;
    addAFHook(formId);
  }
};

var singleHandler = function (event, template) {
  var fileList = [];
  FS.Utility.eachFile(event, function (f) {
    fileList.push(f.name);
  });
  template.$('.cfsaf-field').val(fileList.join(", "));
  var fileList = event.originalEvent.dataTransfer ? event.originalEvent.dataTransfer.files : event.currentTarget.files;
  // Store the FileList on the file input for later
  template.$('.cfsaf-hidden').data("cfsaf_files", fileList);
};

Template.cfsFileField_semanticUI.events({
  'click .cfsaf-field': function (event, template) {
    template.$('.cfsaf-hidden').click();
  },
  'change .cfsaf-hidden': singleHandler,
  'dropped .cfsaf-field': singleHandler
});

function addAFHook(formId) {
  AutoForm.addHooks(formId, {
    before: {
      // We add a before.insert hook to upload all the files in the form.
      // This hook doesn't allow the form to continue submitting until
      // all the files are successfully uploaded.
      insert: CfsAutoForm.Hooks.beforeInsert,
      update: CfsAutoForm.Hooks.beforeUpdate
    },
    after: {
      // We add an after.insert hook to delete uploaded files if the doc insert fails.
      insert: CfsAutoForm.Hooks.afterInsert,
      update: CfsAutoForm.Hooks.afterUpdate
    }
  });
}