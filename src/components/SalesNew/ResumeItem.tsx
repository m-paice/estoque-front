import { TrashIcon } from "@heroicons/react/20/solid";
import { Avatar } from "../Avatar";
import { useState } from "react";
import { useSaleContext } from "../../context/sale";

interface Props {
  index: number;
  id: string;
  name: string;
  price: number;
  amount: number;
  color: string;
  size: string;
}

export function ResumeItem({
  index,
  id,
  name,
  price,
  amount,
  color,
  size,
}: Props) {
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
            onClick={() => additionAmount(index)}
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
            onClick={() => subtractionAmount(index)}
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
            onClick={() => removeProduct(index)}
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
          justifyContent: "flex-start",
          gap: 10,
        }}
      >
        <p
          style={{
            display: color ? "flex" : "none",
            alignItems: "center",
            gap: 5,
            fontSize: 14,
          }}
        >
          Cor{" "}
          <span
            style={{
              backgroundColor: color,
              width: 20,
              height: 20,
              display: "inline-block",
              borderRadius: 5,
              marginBottom: 5,
            }}
          />
        </p>
        <p
          style={{
            display: size ? "block" : "none",
            fontSize: 14,
          }}
        >
          Tamanho: <span>{size}</span>
        </p>
      </div>
    </li>
  );
}
