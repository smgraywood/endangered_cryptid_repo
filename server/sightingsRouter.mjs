import express from "express";

import * as db from "./db.mjs";

const sightingsRouter = express.Router();

sightingsRouter.get("/", async (request, response) => {
  const sightings = await db.getSightings();
  response.json(sightings);
});

sightingsRouter.use(express.json());
sightingsRouter.post("/", async (request, response) => {
  const sightings = await db.addSightings(request.body.name);
  response.status(201).json(sightings);
});

export default sightingsRouter;
