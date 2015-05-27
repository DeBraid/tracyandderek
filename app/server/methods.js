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
  }
});

Meteor.methods({
  sendEmail: function(doc) {
    // Important server-side check for security and data integrity
    // check(doc, Schema.rsvps);

    // Build the e-mail text
    var text = "Thank you " + doc.guests + 
    			" for your wedding RSVP" + "\n\n" + 
    			"See you August 29th -- Tracy and Derek";

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