export function Categories() {
  return (
    <div>
      <h4>Categorias</h4>
      <div
        style={{
          height: 400,
          overflow: "auto",
        }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              paddingBlock: 5,
            }}
          >
            Categoria
          </div>
        ))}
      </div>
    </div>
  );
}
