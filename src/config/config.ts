import "dotenv/config";

const SQLSERVER_USER = process.env.SQLSERVER_USER;
const SQLSERVER_PASSWORD = process.env.SQLSERVER_PASSWORD;
const SQLSERVER_SERVER = process.env.SQLSERVER_SERVER;
const SQLSERVER_DATABASE = process.env.SQLSERVER_DATABASE;

const dbConfig = {
  user: SQLSERVER_USER,
  password: SQLSERVER_PASSWORD,
  server: SQLSERVER_SERVER,
  database: SQLSERVER_DATABASE,
  options: {
    trustServerCertificate: true,
  },
};

export default dbConfig;
