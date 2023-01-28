import List from "./List";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h4>{people.length} birthday today</h4>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
