var db = require('../db');

module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (data, cb) {
      console.log(data.username );

      db.connection.connect();

      db.connection.query(`INSERT INTO users (USERNAME) VALUES ('${data.username}')`, function(err, result) {
         if (err) {
            console.log(err);
            throw err;
         }

         cb(result);
          
       });

      db.connection.end();


    }
  }
};

