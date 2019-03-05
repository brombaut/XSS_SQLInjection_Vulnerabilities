DROP DATABASE IF EXISTS cs4417_attacker_db;
CREATE DATABASE cs4417_attacker_db;
USE cs4417_attacker_db;

DROP TABLE IF EXISTS victim_data;

CREATE TABLE victim_data (
  id                    INT               NOT NULL AUTO_INCREMENT,
  victim_string         VARCHAR(2048)     NOT NULL,
  PRIMARY KEY (id)
);