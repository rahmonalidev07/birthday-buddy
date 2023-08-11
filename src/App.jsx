// hooks
import { useState } from "react";

// components
import List from "./components/List";

// data
import data from "./data/db";
import { Button } from "bootstrap";

function App() {
  const [people, setPeople] = useState(data);
  const deletePerson = (id) => {
    console.log(id);
    // filter
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  return (
    <>
      <div className="container">
        <h1>{people ? people.length : 0} birthdays today</h1>
        <List people={people} deletePerson={deletePerson} />
        {people.length ? (
          <button
            onClick={() => {
              setPeople([]);
            }}
            className="clear-btn"
          >
            Clear All
          </button>
        ) : null}
        {!people.length && (
          <button
            onClick={() => {
              setPeople(data);
            }}
            className="refresh-btn"
          >
            Refresh
          </button>
        )}
      </div>
    </>
  );
}

export default App;
