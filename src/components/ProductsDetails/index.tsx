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
            <p>
              {responseFindOne?.categories.map((item) => item.name).join(", ")}
            </p>
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
              gridTemplateColumns: "repeat(4, 100px)",
              marginBottom: 10,
              marginTop: 40,
            }}
          >
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Cor</p>
            <p>Tamanho</p>
          </div>
          <div>
            {responseFindOne.variants.map((variant) => (
              <div
                key={variant.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 100px)",
                  marginBottom: 10,
                }}
              >
                <p>
                  {variant.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p>{variant.amount}</p>
                <span
                  style={{
                    backgroundColor: variant.color,
                    width: 30,
                    height: 30,
                    display: "inline-block",
                    borderRadius: 5,
                  }}
                ></span>
                <p>{variant.size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
