CREATE TABLE IF NOT EXISTS users(
  "_id" SERIAL PRIMARY KEY,
  "username" VARCHAR NOT NULL,
  "password" VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
  "_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "messages" VARCHAR NOT NULL,
  foreign key ("user_id")
  references users("_id")
  on delete cascade 
);

