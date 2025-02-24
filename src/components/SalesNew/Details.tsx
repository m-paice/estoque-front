import { useParams } from "react-router-dom";
import { Avatar } from "../Avatar";
import { Button } from "../Button";

import { useEffect, useState } from "react";
import { useRequestFindOne } from "../../hooks/useRequestFindOne";
import { Products } from "../../pages/Products";
import { useSaleContext } from "../../context/sale";
import { ColorItem } from "./ColorItem";
import { SizeItem } from "./SizeItem";
import { formatPrice } from "../../utils/formatPrice";

export function Details() {
  const { productId } = useParams<{ productId: string }>();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const { addProduct } = useSaleContext();

  const { execute: execFindOne, response: product } =
    useRequestFindOne<Products>({
      path: "/products",
      id: productId!,
    });

  useEffect(() => {
    if (productId) {
      execFindOne();
      setSelectedColor("");
      setSelectedSize("");
    }
  }, [productId]);

  useEffect(() => {
    if (product) {
      setSelectedColor(
        product.variants.reduce((acc, variant) => {
          if (acc.includes(variant.color)) return acc;
          return [...acc, variant.color];
        }, [] as string[])[0]
      );
    }
  }, [product]);

  useEffect(() => {
    if (product && !selectedSize && selectedColor) {
      setSelectedSize(
        product.variants
          .filter((item) => item.color === selectedColor)
          .reduce((acc, variant) => {
            if (acc.includes(variant.size)) return acc;
            return [...acc, variant.size];
          }, [] as string[])[0]
      );

      if (
        !product.variants.some(
          (item) => item.color === selectedColor && item.size === selectedSize
        )
      ) {
        setSelectedSize(
          product.variants.reduce((acc, variant) => {
            if (acc.includes(variant.size)) return acc;
            return [...acc, variant.size];
          }, [] as string[])[0]
        );
      }
    }
  }, [selectedColor, selectedSize, product]);

  const producSelected =
    product?.variants.find(
      (item) => item.color === selectedColor && item.size === selectedSize
    ) || product?.variants[0];

  const handleAddProduct = () => {
    if (producSelected) {
      addProduct({
        product: {
          id: product!.id,
          name: product!.name,
          price: producSelected.price,
          amount: producSelected.amount,
          color: selectedColor,
          size: selectedSize,
        },
        amount: 1,
      });
    }
  };

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
        paddingRight: 10,
        paddingBottom: 40,
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>{formatPrice(producSelected?.price || 0)}</p>
        <p>Estoque: {producSelected?.amount || 0}</p>
      </div>
      <div
        style={{
          display:
            product.variants.filter((item) => item.color).length >= 1
              ? "block"
              : "none",
        }}
      >
        <p>Cor</p>
        <div
          style={{
            display: "flex",
            gap: 5,
          }}
        >
          {product.variants
            .reduce((acc, variant) => {
              if (acc.includes(variant.color)) return acc;
              return [...acc, variant.color];
            }, [] as string[])
            .map((item) => (
              <ColorItem
                key={item}
                item={item}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            ))}
        </div>
      </div>
      <div
        style={{
          display:
            product.variants.filter((item) => item.size).length >= 1
              ? "block"
              : "none",
        }}
      >
        <p>Tamanho</p>
        <div
          style={{
            display: "flex",
            gap: 5,
          }}
        >
          {product.variants
            .filter((item) => item.color === selectedColor)
            .map((item) => (
              <SizeItem
                key={item.size}
                item={item.size}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            ))}
        </div>
      </div>
      <Button onClick={handleAddProduct}>Adicionar</Button>
    </div>
  );
}
