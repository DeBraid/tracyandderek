NotAttending = new Mongo.Collection("notAttending");

NotAttending.after.insert(function (userId, doc) {
  console.log('server NotAttending after hook w/', doc.guests);
});

NotAttending.attachSchema(new SimpleSchema({
  guests: {
    type: String,
    label: "Name of Guest(s)",
    optional: false,
    min: 5,
    max: 80    
  },
  restrictions: {
    type: String,
    label: "Note (optional)",
    optional: true,
    max: 250,
    autoform: {
       rows: 4
    }
  },
  email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      label: "Email (required)",
      optional: false
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
}));

NotAttending.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});