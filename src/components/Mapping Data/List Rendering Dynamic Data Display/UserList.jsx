// Showing each and every user dynamically listed through .map() method.
const UserList = () => {
  //   const users = ["Rahim", "Karim", "Jabir"];

  const users = ["Chhanda", "Montu", "Tomal", "Kuntol", "Shakil"];
  return (
    <div className="bg bg-green-400 text-center text-red-800 text-2xl py-2 text-bold">
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      {/* <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul> */}

      {/* <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default UserList;
