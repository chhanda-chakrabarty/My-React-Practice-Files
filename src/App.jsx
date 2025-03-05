import MappingDataToComponents from "./components/MappingDataToComponents";
import Data from "./MappingData.json";

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
      <h1 className="bg-red-600 text-2xl text-white">
        Mapping Data to components
      </h1>

      {/* Practice-4 using map() array method type-2 */}

      {Data.map((item, index) => (
        <MappingDataToComponents
          key={index}
          titleName={item.name}
          aboutAge={item.age}
        />
      ))}
      {/* {
        <MappingDataToComponents
          titleName={Data[0].name}
          aboutAge={Data[0].age}
        />
      }
      {
        <MappingDataToComponents
          titleName={Data[1].name}
          aboutAge={Data[1].age}
        />
      }
      {
        <MappingDataToComponents
          titleName={Data[2].name}
          aboutAge={Data[2].age}
        />
      }
      {
        <MappingDataToComponents
          titleName={Data[3].name}
          aboutAge={Data[3].age}
        />
      } */}
    </div>
  );
};

export default App;
