/* eslint-disable react/prop-types */

const names = [
  { id: 1, name: "Ádám" },
  { id: 2, name: "Julcsi" },
  { id: 3, name: "Bogi" },
  { id: 4, name: "Ferdinád" },
];
const Hello = ({ name, children }) => {
  // const { name } = props;

  return name === "" ? (
    <h1>Hello, Stranger!</h1>
  ) : (
    <>
      <h1>Hello, {name}!</h1>
      {children}
      <ul>
        {names.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Hello;
