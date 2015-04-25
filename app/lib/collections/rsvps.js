Rsvps = new Mongo.Collection("rsvps");
Rsvps.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Content"
  }
}));