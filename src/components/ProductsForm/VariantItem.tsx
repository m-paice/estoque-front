import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";

interface Props {
  index: number;
  variant: {
    price: number;
    amount: number;
    color: string;
    size: string;
  };

  removeItem: (index: number) => void;
  editItem: (index: number) => void;
}

export function VariantItem({ index, variant, removeItem, editItem }: Props) {
  const [hover, setHover] = useState(false);
  const [hoverEdit, setHoverEdit] = useState(false);
  return (
    <div
      key={index}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 60px 100px 20px 20px",
        gap: 16,
        marginBottom: 10,
      }}
    >
      <p>
        {variant.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p>{variant.amount}</p>
      <span
        style={{
          backgroundColor: variant.color,
          width: 30,
          height: 30,
          display: "inline-block",
          borderRadius: 5,
        }}
      ></span>
      <p>{variant.size}</p>

      <TrashIcon
        onClick={() => removeItem(index)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? "#F46565" : "transparent",
          padding: 5,
          borderRadius: 20,
          transition: "0.3s",
        }}
        width={30}
        color={hover ? "#fff" : "#F46565"}
        cursor="pointer"
      />

      <PencilSquareIcon
        onClick={() => editItem(index)}
        onMouseEnter={() => setHoverEdit(true)}
        onMouseLeave={() => setHoverEdit(false)}
        style={{
          backgroundColor: hoverEdit ? "orange" : "transparent",
          padding: 5,
          borderRadius: 20,
          transition: "0.3s",
        }}
        width={30}
        color={hoverEdit ? "#fff" : "orange"}
        cursor="pointer"
      />
    </div>
  );
}
