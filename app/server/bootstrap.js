Meteor.startup(function () {
});

process.env.MAIL_URL="smtp://tracyandderek2015%40gmail.com:" + Meteor.settings.mailInfo + "@smtp.gmail.com:465/";