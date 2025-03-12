const ImmediatelyIF = () => {
  let marks = 70;
  return (
    <div>
      {(() => {
        if (marks >= 80 && marks <= 100) {
          return <h1>Got A+</h1>;
        } else {
          return <h1>Got A</h1>;
        }
      })()}
    </div>
  );
};

export default ImmediatelyIF;
