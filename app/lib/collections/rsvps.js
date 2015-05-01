Rsvps = new Mongo.Collection("rsvps");
SuccessfulRsvp = new Mongo.Collection("successfulRsvp");

Rsvps.after.insert(function (userId, doc) {
  console.log('server RSVPS after hook w/', doc.guests);
  SuccessfulRsvp.insert({
    guests: doc.guests,
    email: doc.email
  })
});

Rsvps.attachSchema(new SimpleSchema({
  guests: {
    type: String,
    label: "Name of Guest(s)",
    optional: false,
    max: 80    
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
      label: "Email (recommended but optional)",
      optional: true
  }
  // , 
  // createdAt: {
  //   autoValue: true
  // }
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