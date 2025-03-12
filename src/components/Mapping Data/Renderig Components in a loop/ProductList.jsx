const ProductList = () => {
  const cityNames = [
    {
      name: "Dhaka",
      population: 14900000,
      area: 12.5,
      country: "Bangladesh",
    },
  ];
  return (
    <div className="bg-amber-600 text-black text-2xl text-center py-2 ">
      {/* {[name, population, area, country]} */}
      <ul>
        {cityNames.map((city, index) => (
          <li key={index}>
            `City: {city.name} <br /> Population: {city.population} <br />
            Area: {city.area} <br /> Country: {city.country}`
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
