const LogIn = () => {
  return (
    <div>
      <button
        onClick={() => {
          alert("Logged In");
        }}
        className="bg-red-500 text-white text-center text-xl px-[85px] py-2 block m-[ 0 auto]"
      >
        Login
      </button>
    </div>
  );
};

export default LogIn;
