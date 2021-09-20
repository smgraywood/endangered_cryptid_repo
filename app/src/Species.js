import * as React from "react";

import * as apiClient from "./apiClient";

const Species = () => {
  const [species, setSpecies] = React.useState([]);

  const loadSpecies = () => apiClient.getSpecies().then(setSpecies);
  React.useEffect(() => {
    loadSpecies();
  }, []);
  const addSpecies = (species) =>
    apiClient.addSpecies(species).then(loadSpecies);

  return (
    <section>
      <SpeciesList species={species} />
      {/* <AddSpecies {...{ addSpecies }} /> */}
    </section>
  );
};

const SpeciesList = ({ species }) => (
  <ul>
    {species.map(
      ({
        id,
        common_name,
        scientific_name,
        number_estimated_in_wild,
        conservation_status,
        record_created,
      }) => (
        <li key={id}>
          {scientific_name},{common_name},{number_estimated_in_wild},
          {conservation_status}
        </li>
      ),
    )}
  </ul>
);

const AddSpecies = ({ addSpecies }) => {
  const [species, setSpecies] = React.useState("");

  const canAdd = species !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addSpecies(species);
      setSpecies("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New task:{" "}
        <input
          onChange={(e) => setSpecies(e.currentTarget.value)}
          value={species}
        />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default Species;
