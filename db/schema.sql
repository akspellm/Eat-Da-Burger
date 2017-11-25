USE heroku_91fb397d2b7010f;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    PRIMARY KEY(id),
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    date TIMESTAMP
);