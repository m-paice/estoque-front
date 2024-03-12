import { Categories } from "./Categories";
import { Details } from "./Details";
import { ProductsList } from "./ProductsList";
import { Resume } from "./Resume";

interface Props {
  products: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }[];
}

export function Products({ products }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "10px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px 150px 1fr",
          gap: "10px",
        }}
      >
        <Categories />
        <ProductsList />
        <Details />
      </div>
      <Resume products={products.slice(0, 3)} />
    </div>
  );
}
