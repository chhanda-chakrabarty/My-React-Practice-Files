const LogOut = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("Logged Out");
        }}
        className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
      >
        Logout
      </button>
    </div>
  );
};

export default LogOut;
