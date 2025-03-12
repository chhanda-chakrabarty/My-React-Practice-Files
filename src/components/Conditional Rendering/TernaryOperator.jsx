import LogIn from "../Button/logIn";
import LogOut from "../Button/logOut";

const TernaryOperator = () => {
  let status = false;
  return (
    <div>
      {" "}
      <h1>User Status</h1>
      {status ? (
        // <button
        //   onClick={() => {
        //     alert("Logged Out");
        //   }}
        //   className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
        // >
        //   Logout
        // </button>
        <LogIn />
      ) : (
        // <button
        //   onClick={() => {
        //     alert("Logged In");
        //   }}
        //   className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
        // >
        //   Login
        // </button>
        <LogOut />
      )}
    </div>
  );
};

export default TernaryOperator;
