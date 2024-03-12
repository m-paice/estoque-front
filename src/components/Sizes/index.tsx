interface Props {
  sizes: string[];
  selectedSize: string;
  handleSelectedSize(size: string): void;
  hideSelectedSize?: boolean;
}

export function Sizes({
  sizes = [],
  selectedSize,
  handleSelectedSize,
  hideSelectedSize,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 5,
        }}
      >
        {sizes.map((size) => (
          <span
            onClick={() => handleSelectedSize(size)}
            key={size}
            style={{
              padding: "5px 10px",

              borderRadius: 5,
              border: "1px solid #ccc",
              backgroundColor: "white",
              fontSize: 20,
            }}
          >
            {size}
          </span>
        ))}
      </div>
      <div
        style={{
          display: hideSelectedSize ? "none" : "flex",
          gap: 10,
        }}
      >
        <strong>Selecionado:</strong>
        <p> {selectedSize || "nenhum"}</p>
      </div>
    </div>
  );
}
