Rsvps = new Mongo.Collection("rsvps");

Rsvps.attachSchema(new SimpleSchema({
  guests: {
    type: Array,
    label: "Name of Guest(s)",
    optional: false,
    minCount: 1,
    maxCount: 4
  },
  "guests.$": {
    type: String
  },
  restrictions: {
    type: String,
    label: "Dietary restrictions? Special Requests? Buried Treasure? Tell us about it.",
    optional: true,
    max: 250,
    autoform: {
       rows: 4
    }
  },
  email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      label: "Email (recomended but optional)",
      optional: true
  }
}));

Rsvps.allow({
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