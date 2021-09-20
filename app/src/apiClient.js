export const getSpecies = () => _get("/api/species");
export const addSpecies = (name) => _post("/api/species", { name });

export const getIndividuals = () => _get("/api/individuals");
export const addIndividuals = (name) => _post("/api/individuals", { name });

export const addSightings = (name) => _post("/api/sightings", { name });
export const getSightings = () => _get("/api/sightings");

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
