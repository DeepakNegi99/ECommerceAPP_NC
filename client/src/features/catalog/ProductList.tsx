import { Product } from "../../app/models/product";

type Props = {
  products: Product[];
}
export default function ProductList({products}: Props) {
  return (
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
  )
}
