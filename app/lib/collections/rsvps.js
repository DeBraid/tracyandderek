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
      type: Number,
      allowedValues: [
         1,
         2,
         3
      ],
      optional: true,
      label: "Number Attending",
      autoform: {
         options: [
            {
               label: "One",
               value: 1
            },
            {
               label: "Two",
               value: 2
            },
            {
               label: "Three+ please leave a note regarding # of children",
               value: 3
            }
         ]
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