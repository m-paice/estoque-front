import { useParams } from "react-router-dom";
import { Avatar } from "../Avatar";
import { Header } from "./Header";
import { useEffect } from "react";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Products } from "../../pages/Products";

export function ProductsDetails() {
  const { id } = useParams<{ id: string }>();

  const { execute: execFindOne, response: responseFindOne } =
    useRequestFindOne<Products>({
      id: id!,
      path: "/products",
    });

  useEffect(() => {
    if (id) execFindOne();
  }, [id]);

  if (!id || !responseFindOne)
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
        <h4>Selecione um produto para ver mais informações</h4>
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
            <h4>{responseFindOne.name}</h4>
            <p>{responseFindOne?.category?.name}</p>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <h4>Informações do produto</h4>
          <div>
            <p>{responseFindOne.description}</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 200px",
            }}
          >
            <div>
              <p>Preço:</p>
              <p>
                {responseFindOne.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div>
              <p>Quantidade em estoque:</p>
              <p>{responseFindOne.amount}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
