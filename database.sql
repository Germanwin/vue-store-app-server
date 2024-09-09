create TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    producer VARCHAR(255),
    price INTEGER
);

ALTER TABLE product
ADD price INTEGER;

-- create TABLE post(
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     content VARCHAR(255),
--     user_id INTEGER,
--     FOREIGN KEY (user_id) REFERENCES person (id)
-- );