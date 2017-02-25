var db = require('../db');

module.exports = {
  

  // rooms: {
  //   get: function () {

  //   },
  //   post: function (data, cb) {
  //     var roomText = data.roomname;
  //     db.connection.query(`INSERT INTO rooms (ROOMNAME) VALUES ('${roomText}')`, function(err, result) {
  //       if (err) {
  //         console.log(err);
  //         throw err;
  //       }
  //       cb(result);
  //     });
  //   }
  // }, (select id from users where username = userName)

  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (data, cb) {

      var userName = data.username;
      var messageText = data.message;
      var roomText = data.roomname;
      db.connection.query(`INSERT INTO messages (USERID, ROOMNAME, TEXT) VALUES ( 23 ,'${roomText}','${messageText}')`, 
        function(err, result) {
         if (err) {
            console.log(err);
            throw err;
         }

         cb(result);
          
       });   
      /*
json: {
          username: 'Valjean',
          message: 'In mercy\'s name, three days is all I need.',
          roomname: 'Hello'
        }


CREATE TABLE users (
ID INTEGER PRIMARY KEY AUTO_INCREMENT,
USERNAME CHAR(20)
);

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
ID INTEGER PRIMARY KEY AUTO_INCREMENT,
USERID INTEGER,
ROOMNAME CHAR(20),
TEXT CHAR(140),
FOREIGN KEY (USERID) 
   REFERENCES users (ID)
);
*/

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (data, cb) {
      console.log(data.username );

    

      db.connection.query(`INSERT INTO users (USERNAME) VALUES ('${data.username}')`, function(err, result) {
         if (err) {
            console.log(err);
            throw err;
         }

         cb(result);
          
       });

   


    }
  }
};

