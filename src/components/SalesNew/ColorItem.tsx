interface Props {
  item: string;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export function ColorItem({ item, selectedColor, setSelectedColor }: Props) {
  return (
    <div
      key={item}
      onClick={() => setSelectedColor(item)}
      style={{
        border: "1px solid gray",
        borderColor: item === selectedColor ? "#7E9EF0" : "gray",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <span
        style={{
          borderRadius: 5,
          backgroundColor: item,
          display: "inline-block",
          width: 40,
          height: 40,
          cursor: "pointer",
        }}
      ></span>
    </div>
  );
}
