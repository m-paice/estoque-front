import { useParams } from "react-router-dom";
import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { Colors } from "../Colors";
import { Sizes } from "../Sizes";
import { useEffect } from "react";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Products } from "../../pages/Products";
import { useSaleContext } from "../../context/sale";

export function Details() {
  const { productId } = useParams<{ productId: string }>();
  const { addProduct } = useSaleContext();

  const { execute: execFindOne, response: product } =
    useRequestFindOne<Products>({
      path: "/products",
      id: productId!,
    });

  useEffect(() => {
    if (productId) execFindOne();
  }, [productId]);

  if (!productId || !product) {
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
  }

  return (
    <div
      style={{
        height: 400,
        overflow: "auto",

        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar size="large" />
      </div>

      <div>
        <h4>{product?.name}</h4>
        <p
          style={{
            color: "gray",
            fontSize: 12,
          }}
        >
          {product?.description}
        </p>
        <p>
          {product?.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div>
        <Colors
          colors={product?.colors || []}
          selectedColor=""
          handleSelectColor={() => {}}
          hideSelectedColor={product?.colors.length === 0}
        />
        <Sizes
          sizes={product?.sizes || []}
          selectedSize=""
          handleSelectedSize={() => []}
          hideSelectedSize={product?.sizes.length === 0}
        />
      </div>
      <Button
        onClick={() => {
          addProduct({
            amount: 1,
            product: product!,
          });
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}
