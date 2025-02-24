import { formatPrice } from "../../utils/formatPrice";

interface Props {
  product: {
    id: string;
    name: string;
    amount: number;
    price: number;
  };
}

export function TableItem({ product }: Props) {
  return (
    <div
      key={product.id}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 120px 120px 120px",
        borderBottom: "1px solid #e5e7eb",
        paddingTop: 10,
      }}
    >
      <p>#{product.id.slice(0, 5)}</p>
      <p>{product.name}</p>
      <p style={{ textAlign: "right" }}>{product.amount}</p>
      <p style={{ textAlign: "right" }}>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p style={{ textAlign: "right" }}>
        {formatPrice(product.price * product.amount)}
      </p>
    </div>
  );
}
