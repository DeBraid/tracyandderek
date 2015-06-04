/*****************************************************************************/
/* SERVER ONLY Methods */
/*****************************************************************************/
Meteor.methods({
  'submitRsvp': function (item) {
    console.log("item in submitRsvp", item);
    Rsvps.insert(item);
    Meteor.call('sendEmail', item);
  },
  'storeNewPhoto': function (pic) {
    Photos.insert({
      src: pic
    });
  },
  submitNotAttending: function (item) {
    console.log("item in submitNotAttending", item);
    NotAttending.insert(item);
    Meteor.call('sendNotAttendingEmail', item);
  }
});

Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    // check(doc, Schema.rsvps);

    // Build the e-mail text
    var text = "Thank you " + doc.guests + 
          " for your wedding RSVP!" + "\n\n" + 
    			"Please join us July 4th 2015 for our Stag and Doe" + "\n\n" + 
    			"See you August 29th for the wedding -- Tracy and Derek";

    this.unblock();

    // Send the e-mail
    Email.send({
        to: doc.email,
        from: "de.braid@gmail.com",
        subject: "Tracy and Derek Wedding RSVP Confirmation",
        text: text
    });
  },
  sendNotAttendingEmail: function(doc) {
    // Build the e-mail text
    var text = "Sorry that you can't make it " + doc.guests + 
          " but we thank you for the RSVP!" + "\n\n" + 
          "Please join us July 4th 2015 for the Stag and Doe -- Tracy and Derek";        

    this.unblock();

    // Send the e-mail
    Email.send({
        to: doc.email,
        from: "de.braid@gmail.com",
        subject: "Tracy and Derek Wedding RSVP Confirmation",
        text: text
    });
  }
});