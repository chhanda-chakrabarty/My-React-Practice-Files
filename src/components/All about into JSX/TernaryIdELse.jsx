const TernaryIdELse = () => {
  let marksTotal = 77;
  return (
    <div>
      {marksTotal > 78 ? (
        <h1 className="bg bg-green-400 text-center text-2xl py-2 text-bold">
          Brilliant Result
        </h1>
      ) : (
        <h2 className="bg bg-red-300 text-center text-2xl py-2 text-bold">
          Average Result
        </h2>
      )}
    </div>
  );
};

export default TernaryIdELse;
