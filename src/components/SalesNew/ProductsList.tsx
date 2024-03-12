export function ProductsList() {
  return (
    <div>
      <h4>Produtos</h4>
      <div
        style={{
          height: 400,
          overflow: "auto",
        }}
      >
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            style={{
              paddingBlock: 5,
            }}
          >
            Produto
          </div>
        ))}
      </div>
    </div>
  );
}
