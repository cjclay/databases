var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
       console.log('MESSAGE POST TRY:', req.body);
       
      models.messages.post(req.body, function (results) {
        res.send(results);
      });



    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('METHOD:', req.body.username);

      models.users.post(req.body, function (results) {


        res.send(results);
      });

    }
  }
};

