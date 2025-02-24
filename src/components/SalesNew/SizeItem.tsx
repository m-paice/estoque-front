interface Props {
  item: string;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

export function SizeItem({ item, selectedSize, setSelectedSize }: Props) {
  return (
    <span
      key={item}
      onClick={() => setSelectedSize(item)}
      style={{
        padding: 5,
        borderRadius: 5,
        border: "1px solid gray",
        borderColor: item === selectedSize ? "#7E9EF0" : "gray",
        color: item === selectedSize ? "#7E9EF0" : "gray",
        cursor: "pointer",
      }}
    >
      {item}
    </span>
  );
}
