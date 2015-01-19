Wheels = new Mongo.Collection("wheels");

if (Meteor.isClient) {
  
  // Wheel template
  Template.body.helpers ({
    wheels: function() {
      return Wheels.find({});
    }
  });

  // Account Setup
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // URL Routing
  Router.route('/', function () {
    this.render('home');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Code to run on server at startup
  });
};