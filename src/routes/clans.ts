import { Router } from "express";
import { clans } from "../controllers/index.js";

const clansRouter = Router();

clansRouter.get("/", clans.getClans);
clansRouter.post("/add_clan", clans.addClan);

export default clansRouter;
