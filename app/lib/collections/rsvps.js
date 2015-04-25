Rsvps = new Mongo.Collection("rsvps");

Rsvps.attachSchema(new SimpleSchema({
  guests: {
    type: Array,
    optional: false,
    minCount: 1,
    maxCount: 3
  },
  "guests.$": {
    type: String
  },
  name: {
    type: String,
    label: "Guest Name(s)",
    // placeholder: "foobar",
    max: 200
  },
  choose: {
    type: String,
    allowedValues: [
       "one",
       "two",
       "three"
    ],
    optional: true,
    label: "Choose a number"
  },
  agree: {
    type: Boolean,
    label: "Do you have dietary restrictions?",
    autoform: {
       type: "boolean-radios",
       trueLabel: "You bet, meat is murder.",
       falseLabel: "Nope.  Bring the loins.",
       value: false
    }
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