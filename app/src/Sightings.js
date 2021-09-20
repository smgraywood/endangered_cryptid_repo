import * as React from "react";

import * as apiClient from "./apiClient";

const Sightings = () => {
  const [sightings, setSightings] = React.useState([]);

  const loadSightings = () => apiClient.getSightings().then(setSightings);
  React.useEffect(() => {
    loadSightings();
  }, []);
  const addSightings = (sightings) =>
    apiClient.addSightings(sightings).then(loadSightings);

  return (
    <section>
      <SightingsList sightings={sightings} />
      {/* <AddSightings {...{ addSightings }} /> */}
    </section>
  );
};

const SightingsList = ({ sightings }) => (
  <ul>
    {sightings.map(
      ({
        id,
        date_and_time,
        individual_seen,
        location_of_sighting,
        healthy,
        sighters_contact_info,
        record_created,
      }) => (
        <li key={id}>
          {date_and_time},{individual_seen},{location_of_sighting},{healthy},
          {sighters_contact_info},{record_created}
        </li>
      ),
    )}
  </ul>
);

const AddSightings = ({ addSightings }) => {
  const [sightings, setSightings] = React.useState("");

  const canAdd = sightings !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addSightings(sightings);
      setSightings("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        New task:{" "}
        <input
          onChange={(e) => setSightings(e.currentTarget.value)}
          value={sightings}
        />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default Sightings;
