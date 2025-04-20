import {useEffect, useState} from "react";


function App() {
  const [products, setProducts] = useState<{name: string, price:number}[]>([]);

  useEffect(() => {
   fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts(prevState => [...prevState, { name: `Product ${prevState.length + 1}`, price: Math.random() * 100 }]);
  };

  
  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
