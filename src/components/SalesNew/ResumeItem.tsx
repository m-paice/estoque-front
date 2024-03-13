import { TrashIcon } from "@heroicons/react/20/solid";
import { Avatar } from "../Avatar";
import { useState } from "react";
import { useSaleContext } from "../../context/sale";

interface Props {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export function ResumeItem({ id, name, price, amount }: Props) {
  const [houver, setHouver] = useState(false);

  const { removeProduct, additionAmount, subtractionAmount } = useSaleContext();

  return (
    <li
      key={id}
      style={{
        minHeight: 70,
        borderBottom: "1px solid #e6e6e6",
        listStyle: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: 70,
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
          <div>
            <p>{name}</p>
            <p
              style={{
                fontSize: 12,
                color: "#666",
              }}
            >
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <button
            onClick={() => additionAmount(id)}
            style={{
              backgroundColor: "#7E9EF0",
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
          <p>{amount}</p>
          <button
            onClick={() => subtractionAmount(id)}
            style={{
              backgroundColor: "#7E9EF0",
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
          <TrashIcon
            onClick={() => removeProduct(id)}
            onMouseEnter={() => setHouver(true)}
            onMouseLeave={() => setHouver(false)}
            style={{
              backgroundColor: houver ? "#F46565" : "transparent",
              padding: 5,
              borderRadius: 20,
              transition: "0.3s",
            }}
            width={40}
            color={houver ? "#fff" : "#F46565"}
            cursor="pointer"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          Cor{" "}
          <span
            style={{
              backgroundColor: "#7E9EF0",
              width: 20,
              height: 20,
              display: "inline-block",
              borderRadius: 5,
            }}
          />
        </p>
        <p>
          Tamanho: <span>P</span>
        </p>
      </div>
    </li>
  );
}
