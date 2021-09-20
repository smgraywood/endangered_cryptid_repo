import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Individuals from "./Individuals";
import Sightings from "./Sightings";
import Species from "./Species";

const App = () => (
  <main>
    <nav>
      <Link to="/species">Species</Link> |{" "}
      <Link to="/individuals">Individuals</Link> |{" "}
      <Link to="/sightings">Sightings</Link>
    </nav>
    <Routes>
      <Route path="/species" element={<SpeciesHome />} />
      <Route path="/individuals" element={<IndividualsHome />} />
      <Route path="/sightings" element={<SightingsHome />} />
      <Route path="/taco" element={<h1>Hello</h1>}></Route>
    </Routes>
  </main>
);

const SpeciesHome = () => {
  console.log("hello this works =D");
  return (
    <>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <Species />
    </>
  );
};

const IndividualsHome = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Individuals />
  </>
);

const SightingsHome = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <Sightings />
  </>
);

export default App;
