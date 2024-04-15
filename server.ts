import express, { Request, Response } from "express";
// import sql from "mssql";

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API server is running at http://127.0.0.1:${PORT}`);
});
