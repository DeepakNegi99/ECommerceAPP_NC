import {Product} from "../../app/models/product";

type Props = {
  products: Product[];
  addProduct: () => void;
}

export const Catalog = ({products, addProduct}: Props) => {
  return (
    <div>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.names} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};
