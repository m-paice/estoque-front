import { Avatar } from "../Avatar";
import { Header } from "./Header";

export function CategoriesDetails() {
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
            <h4>Tecnologias</h4>
            <p>51 produtos</p>
          </div>
        </div>
      </section>
    </div>
  );
}
