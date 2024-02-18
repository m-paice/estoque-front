import { TrashIcon } from "@heroicons/react/20/solid";
import { Input } from "../Input";
import { Avatar } from "../Avatar";

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
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <p>Pesquise um produto</p>
          <Input placeholder="pesquise um produto aqui..." />
        </div>
      </div>

      <ul
        style={{
          marginTop: 20,
          height: 300,
          overflowY: "auto",
        }}
      >
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 100px 80px 20px",
              alignItems: "center",
              marginBottom: 10,
              paddingRight: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Avatar size="small" />
              <p>{product.name}</p>
            </div>
            <p>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <div
              style={{
                display: "flex",
                gap: 5,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#e34954",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                +
              </button>
              <p>1</p>
              <button
                style={{
                  backgroundColor: "#e34954",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: 5,
                  fontSize: 16,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
            <TrashIcon width={20} color="#e34954" cursor="pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
}
