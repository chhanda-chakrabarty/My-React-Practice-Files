const TernaryIdELse = () => {
  let marksTotal = prompt(`Enter Number: ${prompt}`);
  return (
    <div>
      {marksTotal >= 80 ? (
        <span>{alert("Brilliant Result")}</span>
      ) : (
        <span>{alert("Average Result")}</span>
      )}
    </div>
  );
};

export default TernaryIdELse;
