import express, { Request, Response } from "express";
import sql from "mssql";

const app = express();
const PORT = process.env.PORT || 5000;

const dbConfig = {
  user: "alex",
  password: "password",
  server: "localhost",
  database: "battletechclans",
  options: {
    trustServerCertificate: true,
  },
};

const startServer = async () => {
  try {
    await sql.connect(dbConfig);
    app.listen(PORT, () => {
      console.log(`API server is running at http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
