import { Router } from "express";
import { people } from "../controllers/index.js";

const peopleRouter = Router();

peopleRouter.get("/", people.getPeople);
peopleRouter.post("/add_people", people.addPeople);

export default peopleRouter;
