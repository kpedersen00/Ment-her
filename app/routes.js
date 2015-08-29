var User = require('./models/user');
var Company = require('./models/company');
var requestify = require('requestify');
// var cheerio = require('cheerio');

module.exports = function(app, passport) {
  var userId = 'default';

  var parseCompany = function(title) {
    console.log('title', title)
    return title.split('at')[1];
  };

  var parseTitle = function(title) {
    return title.split('at')[0];
  }

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  var scrapeLinkedin = function(profUrl) {
    console.log('prof', profUrl);
    requestify.get('https://www.linkedin.com/profile/view?id=80212744').then(function(res){
      console.log('response', res)
      var $ = cheerio.load(body);
      console.log('company', $("#background-experience .entity-container").html())
    }, function(err){
      console.log('cheerio err', err);
    });
  }

  app.post('/auth/linkedin', function(req, resp){
    var authCode = req.body.code;
    console.log(authCode);

    requestify.post('https://api.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code='+authCode+'&redirect_uri=http%3A%2F%2Fmenther-50757.onmodulus.net%2Fnerds&client_id=75o7oq8qxk1g5s&client_secret=0O2lAqsjUtFKfscP', {
    }, {
      'headers' : {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then(function(accessRes){
      console.log('accessToken?', accessRes.getBody().access_token);
      requestify.get('https://api.linkedin.com/v1/people/~?format=json&oauth2_access_token='+accessRes.getBody().access_token, {}, {
        'headers' : {
          'Authorization' : 'Bearer ' + accessRes.getBody().access_token,
          'Connection': 'Keep-Alive'
        }
      }).then(function(res){
        User.findOne({'linkedin_id': res.getBody().id}, function(err, doc){
          var user,
              resBody = res.getBody(),
              headline = res.getBody().headline;
          userId = resBody.id;
          if(!doc) {
            user = new User({'linkedin_id': resBody.id, 'first_name': resBody.firstName, 'last_name': resBody.lastName, 'job_title': parseTitle(resBody.headline), 'company': parseCompany(resBody.headline) });
            user.save();
          } else {
            user = doc;
          }
          resp.send({'token': accessRes.getBody().access_token, 'user': user});
        });
      }, function(err){
          console.log('error in access!!', arguments);
      });
    }, function(err){
      console.log('error!!', arguments);
    });

  });

  app.post('auth/token', function(req, res){
    var accessToken = req.body.access_token;
    console.log('access token from new endpoint', accessToken);
  });

  // sample api route
  app.get('/api/users', function(req, res){
    User.find(function(err, users){
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);


      res.json(users); // returns all users in JSON

    });
  });

  app.post('/api/users', function(req, res){
    // Use mongoose to get all users in the database
    var userId = req.body.linkedin_id;
    var query = {'linkedin_id': userId};
    var user = new User(req.body);
    var upstartData = user.toObject();
    delete upstartData._id;
    delete upstartData.__v;

    console.log('ID', upstartData);
    User.findOneAndUpdate(query, upstartData, {upsert:true}, function(err, doc){
      if(err) {
        console.log('error updating!!', err)
      } else {
        User.find(function(err, users){
          res.json({'users':users, 'newUser':user});
        });
      }
    });
  });

  app.post('api/deleteUser', function(req, rest){
    User.remove({'_id' : '55e1553483e01658e700362d' }, function(err, doc){
      if(!err) {
        console.log('removed', doc)
        res.send({'messages': 'Remove success!'});
      } else {
        console.log('err delete', err)
      }
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

  app.get('/api/filter', function(req, res){
    var params = new Array(req.query.filter);
    console.log('filter for', params);

    User.find({strong_skills : {"$in" : params}}, function(err, docs){
      console.log('found them', docs);
      res.json(docs);
    })
  });

  app.get('/api/profile', function(req, res){
    console.log('userId', userId);
    if(userId != null) {
      User.findOne({linkedin_id : userId}, function(err, doc){
        console.log('succes found', doc);
        res.json(doc);
      })      
    }
  });

  // route to handle creating goes here (app.post)
  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });

};