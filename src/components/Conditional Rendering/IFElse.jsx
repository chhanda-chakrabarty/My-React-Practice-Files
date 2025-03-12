const userLoginStatus = (status) => {
  if (status) {
    return (
      <button
        className="bg-red-500 text-white text-center text-xl px-[85px] py-2  m-[ 0 auto]"
        type="button"
        onClick={() => {
          // Implement login logic here
          alert("User logged Out!");
          // Set user status to true
          // window.location.reload(); // Refresh the page to show the updated status
        }}
      >
        Logout
      </button>
    );
  } else {
    return (
      <button
        className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
        type="button"
        onClick={() => {
          // Implement login logic here
          alert("User logged in");
          // Set user status to true
          // window.location.reload(); // Refresh the page to show the updated status
        }}
      >
        Login
      </button>
    );
  }
};

const IFElse = () => {
  return (
    <div>
      <h1 className="bg-green-300 text-center text-xl py-2 text-bold shadow">
        User Status
      </h1>
      {userLoginStatus(true)}
    </div>
  );
};

export default IFElse;
