const InlineCss = () => {
  return (
    <div>
      <button
        onClick={() => alert("Please Enter your password")}
        // onChange={() => alert("Please Enter your password again")}
        style={{
          backgroundColor: "red",
          color: "white",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          margin: "10rem auto",
          display: "block",
          width: "150px",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InlineCss;
