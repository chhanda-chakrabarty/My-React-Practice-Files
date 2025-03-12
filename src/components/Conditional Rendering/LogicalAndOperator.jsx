import LogOut from "../Button/logOut";

const LogicalAndOperator = () => {
  let isLogIn = false;
  return (
    <div>
      <h1>User Status</h1>
      {isLogIn && <LogOut />}
    </div>
  );
};

export default LogicalAndOperator;
