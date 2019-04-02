CREATE TABLE IF NOT EXISTS users(
  "_id" SERIAL PRIMARY KEY,
  "username" VARCHAR NOT NULL,
  "password" VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
  "_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "message" VARCHAR NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  foreign key ("user_id")
  references users("_id")
  on delete cascade 
);


-- coolchat=# ALTER USER student WITH password '12345';
-- coolchat=# GRANT ALL PRIVILEGES ON DATABASE coolchat TO student;
-- coolchat=# GRANT ALL PRIVILEGES ON users TO student;
-- coolchat=# GRANT  ALL PRIVILEGES ON messages TO student;
-- GRANT USAGE ON SEQUENCE users__id_seq TO student;
-- GRANT USAGE ON SEQUENCE messages__id_seq TO student;