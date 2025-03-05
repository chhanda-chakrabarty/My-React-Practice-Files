// Practice-5 using map() array method type-3 to generate unique id from npm package UUID */}
import NestedMapping from "./components/Mapping Data/NestedMapping";
import Unique from "./components/Mapping Data/Unique";

const App = () => {
  // Value loading and accessing by indexing
  //   console.log(Data[1].age);

  // looping to get data dynamically into and Array
  //Practice-1
  //   let items = [];
  //   for (let i = 0; i < Data.length; i++) {
  //     items.push(
  //       <MappingDataToComponents
  //         titleName={Data[i].name}
  //         aboutAge={Data[i].age}
  //       />
  //     );
  //   }

  //Practice-2

  //   let mapping = [];
  //   for (let m = 0; m < Data.length; m++) {
  //     mapping.push(
  //       <MappingDataToComponents
  //         titleName={Data[m].name}
  //         aboutAge={Data[m].age}
  //       />
  //     );
  //   }

  //Practice-3

  //   let items = [];
  //   let j = 0;
  //   while (j < Data.length) {
  //     items.push(
  //       <MappingDataToComponents
  //         titleName={Data[j].name}
  //         aboutAge={Data[j].age}
  //       />
  //     );
  //     j++;
  //   }

  //Practice-4 using map() array method type-1

  //   let items = [];
  //   items = Data.map((item, index) => (
  //     <MappingDataToComponents
  //       key={index}
  //       titleName={item.name}
  //       aboutAge={item.age}
  //     />
  //   ));

  return (
    <div className="w-[350px] grid grid-rows-6 gap-1 place-content-center">
      {/* <h1 className="bg-red-600 text-2xl text-white">
        Mapping Data to components
      </h1> */}
      <h1>{<Unique />}</h1>
      <p>{<NestedMapping />}</p>

      {/* Practice-4 using map() array method type-2 */}

      {/* {Data.map((item, index) => (
        <MappingDataToComponents
          key={index}
          titleName={item.name}
          aboutAge={item.age}
        />
      ))} */}

      {/* Practice-5 using map() array method type-3 to generate unique id from npm package UUID */}
    </div>
  );
};

export default App;
