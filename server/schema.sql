DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;


DROP TABLE IF EXISTS users;

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




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
