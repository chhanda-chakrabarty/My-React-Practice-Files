const MappingDataToComponents = (props) => {
  const { titleName, aboutAge } = props;
  return (
    <div className="mt-2 text-center text-4xl text-gray-50 ">
      <h3 className="bg-violet-500 text-white text-xl ">{titleName}</h3>
      <p className="bg-amber-600 text-white text-xl">{aboutAge}</p>
    </div>
  );
};

export default MappingDataToComponents;
