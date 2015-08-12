Meteor.startup(function() {
  Herald.collection._ensureIndex({userId: 1, "media.email.send": 1, "media.email.sent": 1});
  Comments._ensureIndex({parentCommentId: 1});
  SeoCollection._ensureIndex({route_name: 1})
});
