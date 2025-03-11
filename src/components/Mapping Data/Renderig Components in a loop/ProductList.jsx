const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
];

function Product({ name, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <h5>Price: ${price}</h5>
    </div>
  );
}

function ProductList() {
  return (
    <div className="bg bg-red-300 text-center text-2xl py-2 text-bold">
      {products.map((item) => (
        <Product key={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
}

export default ProductList;
