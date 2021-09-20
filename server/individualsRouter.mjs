import express from "express";

import * as db from "./db.mjs";

const individualsRouter = express.Router();

individualsRouter.get("/", async (request, response) => {
  const individuals = await db.getIndividuals();
  response.json(individuals);
});

individualsRouter.use(express.json());
individualsRouter.post("/", async (request, response) => {
  const individuals = await db.addIndividuals(request.body.name);
  response.status(201).json(individuals);
});

export default individualsRouter;
