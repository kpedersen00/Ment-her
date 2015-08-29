var User = require('./models/user');
var Company = require('./models/company');

module.exports = function(app) {

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // sample api route
  app.get('/api/users', function(req, res){
    // Use mongoose to get all users in the database
    User.find(function(err, users){
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(users); // returns all users in JSON
    });
  });

  app.get('/api/companies', function(req, res){

      Company.find(function(err, companies){
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(companies); // returns all companies in JSON
    });
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};