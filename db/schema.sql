DROP DATABASE IF EXISTS profile_db;
CREATE DATABASE profile_db;

USE profile_db;

-- creates a table to hold bits of projects to display --
CREATE TABLE codeproject (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  body TEXT NOT NULL,
  describing_title VARCHAR(50) NOT NULL,
  site_link VARCHAR(75) NOT NULL,
  git_link VARCHAR(75) NOT NULL,
  image_path VARCHAR(75) NOT NULL,
  alt_image_text VARCHAR(75) NOT NULL,
  is_group_project BOOLEAN NOT NULL,
  valid_from_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  valid_to_date DATETIME DEFAULT '99991231' NOT NULL,
  PRIMARY KEY (id)
);