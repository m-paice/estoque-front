import { Avatar } from "../Avatar";
import { Header } from "./Header";

export function ProductsDetails() {
  return (
    <div>
      <Header />
      <section
        style={{
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Avatar />
          <div>
            <h4>Notebook</h4>
            <p>Tecnologia</p>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <h4>Informações do produto</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <div>
              <p>Preço:</p>
              <p>R$ 1.200,00</p>
            </div>
            <div>
              <p>Quantidade em estoque:</p>
              <p>10</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
