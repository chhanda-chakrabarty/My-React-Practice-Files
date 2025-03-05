import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    name: "chhnada",
    age: 30,
  },
  {
    name: "partha",
    age: 35,
  },
  {
    name: "kajol",
    age: 33,
  },
  {
    name: "Joy",
    age: 38,
  },
  {
    name: "Motin",
    age: 36,
  },
  {
    name: "Faruk",
    age: 39,
  },
  {
    name: "Anna",
    age: 30,
  },
  {
    name: "Mohit",
    age: 39,
  },
  {
    name: "Naeem",
    age: 32,
  },
];

const UniqueID = () => {
  console.log(uuidv4());

  return (
    <div>
      {todos.map((todo) => {
        const { name, age } = todo;
        return (
          <div key={uuidv4()}>
            <h1>{name}</h1>
            <h1>{age}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UniqueID;
