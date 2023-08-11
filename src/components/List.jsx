// list css
import "./List.css";

// liibrary
import { FaTrash } from "react-icons/fa6";

function List({ people, deletePerson }) {
  return (
    <ul>
      {people &&
        people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <li key={id}>
              <img src={image} alt="" width={75} height={75} />
              <div>
                <h3>{name}</h3>
                <p>{age} years</p>
              </div>
              <FaTrash
                onClick={() => deletePerson(id)}
                className="trash-icon"
              />
            </li>
          );
        })}
    </ul>
  );
}

export default List;
