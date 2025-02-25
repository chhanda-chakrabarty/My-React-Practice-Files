const PropsAndDestructuring = (props) => {
  // Destructuring through an object using props.
  //Example 1
  //   const { titleText, textAbout } = props;

  //Example 2

  //   const { titleText, textAbout } = props;

  //Example 3
  //   const { titleText, textAbout } = props;

  //Example 4

  //   console.log(props);
  const { fatherName, motherName, brotherName, friendName, cousinName } = props;

  // Destructuring through an Array.
  // Example - 01
  //   const name = ["Man", "Woman"]; // Value assigning
  //   const [Male, Female] = name; // Attribute or Key assigning

  // Exapmle - 02
  const familyMembers = [
    "Prodip chakrabarty",
    "uma chakrabarty",
    "Anando Chakrabarty",
    "Rupom",
    "Arefin",
  ];
  const [Father, Mother, Brother, Friend, Inlaws] = familyMembers;

  const date = new Date();
  const dateName = date.getDate();
  const monthName = date.getMonth();
  const currentYear = date.getFullYear();

  return (
    <div className="">
      <h1 className="text-center text-white-300 font-bold text-4xl bg-amber-500 w-xl px-1 mx-1 ">
        Card
      </h1>
      <div className="h-screen bg-amber-700 w-xl text-center text-4xl">
        <h3>{cousinName}</h3>
        <p>{friendName}</p>
        <p>{brotherName}</p>
        <p>{motherName}</p>
        <p>{fatherName}</p>
      </div>
    </div>
  );
};

export default PropsAndDestructuring;
