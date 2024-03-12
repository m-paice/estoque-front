interface Props {
  colors: string[];
  selectedColor: string;
  handleSelectColor(color: string): void;

  hideSelectedColor?: boolean;
}

export function Colors({
  colors = [],
  selectedColor,
  handleSelectColor,
  hideSelectedColor,
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
        {colors.map((color) => (
          <span
            onClick={() => handleSelectColor(color)}
            key={color}
            style={{
              width: 30,
              height: 30,
              padding: "5px 10px",
              borderRadius: 5,
              backgroundColor: color,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: hideSelectedColor ? "none" : "flex",
          gap: 10,
        }}
      >
        <strong>Selecionado:</strong>
        <p> {selectedColor || "nenhum"}</p>
      </div>
    </div>
  );
}
