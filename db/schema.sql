DROP DATABASE IF EXISTS profile_db;
CREATE DATABASE profile_db;

USE profile_db;

--creates a table to hold bits of projects to display
CREATE TABLE codeproject(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  body TEXT NOT NULL,
  describingTitle VARCHAR(50) NOT NULL,
  wittyLink VARCHAR(75) NOT NULL,
  siteLink VARCHAR(75) NOT NULL,
  gitLink VARCHAR(75) NOT NULL,
  imagePath VARCHAR(75) NOT NULL,
  altImageText VARCHAR(75) NOT NULL,
  validFromDate DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  validToDate DATETIME DEFAULT '99991231' NOT NULL,
  PRIMARY KEY (id)
);