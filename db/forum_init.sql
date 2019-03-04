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
  content               VARCHAR(2048)   NOT NULL,
  createdAt             DATETIME        NOT NULL,
  createdBy             INT             NOT NULL,
  FOREIGN KEY (createdBy) REFERENCES users (id),
  PRIMARY KEY (id)
);

INSERT INTO users (username, password, first_name, last_name) VALUES ('brombaut', 'testing123', 'Ben', 'Rombaut');
INSERT INTO users (username, password, first_name, last_name) VALUES ('jdoe', 'password', 'John', 'Doe');
INSERT INTO users (username, password, first_name, last_name) VALUES ('jsmith', '123456', 'Jane', 'Smith');


INSERT INTO posts (content, createdAt, createdBy) VALUES (
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non tristique velit. Nunc ut libero ex. Ut tincidunt arcu a risus condimentum, non venenatis quam semper.',
  '2019-03-04 12:00:00',
  1
);

INSERT INTO posts (content, createdAt, createdBy) VALUES (
  'Sed nec rutrum nisl, aliquam consequat tellus. Nam iaculis fringilla sapien, id vestibulum ante pulvinar nec. Aenean eu varius lorem. Donec vitae orci nec magna cursus maximus eu pretium quam.',
  '2019-03-04 14:00:00',
  2
);

INSERT INTO posts (content, createdAt, createdBy) VALUES (
  'Maecenas sit amet porta ante. Aliquam et magna quis enim euismod aliquam. Nunc quam ante, volutpat vel elit eu, maximus sagittis ligula. Nam mattis magna tempor massa varius convallis.',
  '2019-03-04 15:00:00',
  3
);

INSERT INTO posts (content, createdAt, createdBy) VALUES (
  'Cras venenatis quam orci, at tempus est tempor at. Nam non egestas neque. Proin nec pellentesque neque. Sed ac sapien massa. Nulla nec arcu tristique, auctor orci sed, varius erat.',
  '2019-03-04 16:00:00',
  1
);
