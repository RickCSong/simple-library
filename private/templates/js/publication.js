// { "path" : "server/publications/__modelName__Pub.js" }
Meteor.publish('__modelName__', function () {
  return __className__.find();
});
