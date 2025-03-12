const userLoginStatus = (status) => {
  switch (status) {
    case true:
      return (
        <button
          onClick={() => {
            alert("Logged Out");
          }}
          className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
        >
          Logout
        </button>
      );
    case false:
      return (
        <button
          onClick={() => {
            alert("Logged In");
          }}
          className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
        >
          Login
        </button>
      );
  }
};

const SwitchCase = () => {
  return (
    <div>
      <h1>User Status</h1>
      {userLoginStatus(false)}
    </div>
  );
};

export default SwitchCase;
