import app from "./src/app/index.js";
import { dbConfig } from "./src/config/index.js";
import sql from "mssql";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sql.connect(dbConfig as sql.config);
    app.listen(PORT, () => {
      console.log(`API server is running at http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
