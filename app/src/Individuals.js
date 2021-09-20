import * as React from "react";

import * as apiClient from "./apiClient";

const Individuals = () => {
  const [individuals, setIndividuals] = React.useState([]);

  const loadIndividuals = () => apiClient.getIndividuals().then(setIndividuals);
  React.useEffect(() => {
    loadIndividuals();
  }, []);
  const addIndividuals = (individuals) =>
    apiClient.addIndividuals(individuals).then(loadIndividuals);

  return (
    <section>
      <IndividualsList individuals={individuals} />
      {/* <AddIndividuals {...{ addIndividuals }} /> */}
    </section>
  );
};

const IndividualsList = ({ individuals }) => (
  <ul>
    {individuals.map(({ id, nckname, species, record_created }) => (
      <li key={id}>
        {nckname}, {species}, {record_created}
      </li>
    ))}
  </ul>
);

const AddIndividuals = ({ addIndividuals }) => {
  const [individuals, setIndividuals] = React.useState("");

  const canAdd = individuals !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addIndividuals(individuals);
      setIndividuals("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New task:{" "}
        <input
          onChange={(e) => setIndividuals(e.currentTarget.value)}
          value={individuals}
        />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default Individuals;
