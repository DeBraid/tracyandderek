Meteor.startup(function () {
});

process.env.MAIL_URL="smtp://de.braid%40gmail.com:" + Meteor.settings.mailInfo + "@smtp.gmail.com:465/";