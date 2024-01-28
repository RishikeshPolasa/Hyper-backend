import dotenv from "dotenv";
import mysql from "mysql2";
import pg from "pg";

dotenv.config();
// Replace these with your Aiven MySQL connection details
const config = {
  host: process.env.AIVEN_HOST,
  user: process.env.AIVEN_USER,
  password: process.env.AIVEN_PASSWORD,
  database: process.env.AIVEN_DATABASE,
  port: process.env.AIVEN_PORT,
};

// async function createTables() {
//   let connection;

//   try {
//     connection = await pool.getConnection();

//     if (!connection) {
//       throw new Error("Unable to obtain a connection from the pool");
//     }

//     // Replace the following SQL statements with your table creation queries
//     const createUsersTableQuery = `
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         username VARCHAR(50),
//         email VARCHAR(100)
//       );
//     `;

//     // Execute the table creation queries
//     await connection.query(createUsersTableQuery);

//     console.log("Tables created successfully");
//   } catch (error) {
//     console.error("Error creating tables:", error);
//   } finally {
//     if (connection) {
//       connection.release();
//     }
//   }
// }

// // Call the function to create tables
// createTables()
//   .then(() => {
//     // Close the connection pool when done
//     pool.end();
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// const config = {
//   user: "USER",
//   password: "PASSWORD",
//   host: "HOST",
//   port: "PORT",
//   database: "DATABASE",
//   ssl: {
//     rejectUnauthorized: true,
//     ca: fs.readFileSync("./ca.pem").toString(),
//   },
// };

const client = new pg.Client(config);
client.connect(function (err) {
  if (err) throw err;
  client.query("SELECT VERSION()", [], function (err, result) {
    if (err) throw err;

    console.log(result.rows[0]);
    client.end(function (err) {
      if (err) throw err;
    });
  });
});
