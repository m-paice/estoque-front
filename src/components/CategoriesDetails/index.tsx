import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Avatar } from "../Avatar";
import { Header } from "./Header";

interface Category {
  id: string;
  name: string;
}

export function CategoriesDetails() {
  const { id } = useParams<{ id: string }>();

  const { execute, response } = useRequestFindOne<Category>({
    id: id!,
    path: "/categories",
  });

  useEffect(() => {
    if (id) execute();
  }, [id]);

  if (!id || !response)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <img src="/selected.jpg" width={300} alt="Nenhum item encontrado" />
        <h4>Selecione uma categoria para ver mais informações</h4>
      </div>
    );

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
            <h4>{response?.name}</h4>
            <p>51 produtos</p>
          </div>
        </div>
      </section>
    </div>
  );
}
