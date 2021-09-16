import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getSpecies = () => db.any("SELECT * FROM species");


export const addSpecies = (name) =>
  db.one("INSERT INTO species(name) VALUES(${name}) RETURNING *", { name });
  //^TODO SMG this will break if you dont update to accept multiple columns
function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
