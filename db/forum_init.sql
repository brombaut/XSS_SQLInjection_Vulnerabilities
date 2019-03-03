DROP DATABASE IF EXISTS cs4417_forum_database;
CREATE DATABASE cs4417_forum_database;
USE cs4417_forum_database;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username              VARCHAR(64)     NOT NULL,
    password              VARCHAR(64)     NOT NULL,
    first_name            VARCHAR(1024)     NOT NULL,
    last_name             VARCHAR(1024)     NOT NULL,
    UNIQUE (username),
    PRIMARY KEY (username)
);

INSERT INTO users (username, password, first_name, last_name) VALUES ('test1', 'test1', 'test1', 'test1');
INSERT INTO users (username, password, first_name, last_name) VALUES ('test2', 'test2', 'test2', 'test2');
INSERT INTO users (username, password, first_name, last_name) VALUES ('test3', 'test3', '<script>alert("hi")</script>', 'test3');