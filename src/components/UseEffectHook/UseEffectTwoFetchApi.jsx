import { useEffect, useState } from "react";

// By using useEffect method Fetching API
const UseEffectTwoFetchApi = () => {
  let [Data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      // .then((json) => setData(json)) // Stored total json object,for doing this- we will not be able to map this data to see users information.//
      .then((json) => setData(json.users)) // Here we stored only users named array object.Where after applying map function,we will be able to see users information.//
      .catch((error) => console.error("Fetching data Error:", error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {Data.map((user) => (
        <ol key={user.id}>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
        </ol>
      ))}
    </div>
  );
};

export default UseEffectTwoFetchApi;
