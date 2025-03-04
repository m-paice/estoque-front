import { formatPrice } from "../../utils/formatPrice";
import { ResumeItem } from "./ResumeItem";

interface Props {
  products: {
    id: string;
    name: string;
    price: number;
    amount: number;
    color: string;
    size: string;
  }[];
}

export function Resume({ products }: Props) {
  return (
    <div
      style={{
        height: 400,
        borderLeft: "1px solid #e6e6e6",
        paddingLeft: 20,
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <p>Resumo</p>
        <p>
          Total:
          {formatPrice(
            products.reduce(
              (acc, product) => acc + product.price * product.amount,
              0
            )
          )}
        </p>
      </header>

      <main
        style={{
          height: 350,
          overflowY: "auto",
          paddingRight: 10,
        }}
      >
        {products.map((product, index) => (
          <ResumeItem key={index} index={index} {...product} />
        ))}
      </main>
    </div>
  );
}
