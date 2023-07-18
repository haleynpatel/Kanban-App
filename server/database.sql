CREATE DATABASE todo;

CREATE TABLE todoTable(
    todo_id SERIAL PRIMARY KEY, --serial increments the id to keep unique
    description VARCHAR(255)
);

ALTER TABLE todotable ADD COLUMN status integer;