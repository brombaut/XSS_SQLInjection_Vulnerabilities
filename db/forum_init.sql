DROP DATABASE IF EXISTS cs4417_forum_database;
CREATE DATABASE cs4417_forum_database;
USE cs4417_forum_database;

DROP TABLE IF EXISTS users, posts;

CREATE TABLE users (
  id                    INT             NOT NULL AUTO_INCREMENT,
  username              VARCHAR(64)     NOT NULL,
  password              VARCHAR(64)     NOT NULL,
  first_name            VARCHAR(1024)   NOT NULL,
  last_name             VARCHAR(1024)   NOT NULL,
  UNIQUE (username),
  PRIMARY KEY (id)
);

CREATE TABLE posts (
  id                    INT             NOT NULL AUTO_INCREMENT,
  content               VARCHAR(1024)   NOT NULL,
  createdAt             DATETIME        NOT NULL,
  createdBy             INT             NOT NULL,
  FOREIGN KEY (createdBy) REFERENCES users (id),
  PRIMARY KEY (id)
);

INSERT INTO users (username, password, first_name, last_name) VALUES ('brombaut', 'testing123', 'Ben', 'Rombaut');
INSERT INTO users (username, password, first_name, last_name) VALUES ('jdoe', 'testing123', 'John', 'Doe');
-- INSERT INTO users (username, password, first_name, last_name) VALUES ('test3', 'test3', '<script>alert("hi")</script>', 'test3');