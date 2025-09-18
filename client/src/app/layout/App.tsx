import {useEffect, useState} from "react";
import { Catalog } from "../../features/catalog/Catalog";
import {Product} from "../models/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts(prevState = > [...prevState,
      {
        id: prevState.length + 1,
        name: 'product ' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        description: 'This is a new product',
        pictureUrl: 'https://picsum.photos/200',
        brand: 'test',
        type: 'test',
        quantityInStock: 100
      }])
    }
 

  
  return (
    <div>
      <h1>ReStore</h1>
     <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
