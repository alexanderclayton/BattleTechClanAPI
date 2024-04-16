import express from "express";
import cors from "cors";
import { clansRouter, peopleRouter } from "../routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/clans", clansRouter);
app.use("/api/people", peopleRouter);

export default app;
