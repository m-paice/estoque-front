import { useEffect } from "react";
import { useSaleContext } from "../../context/sale";
import { useRequestFindMany } from "../../hooks/useRequestFindMany";
import { Products } from "../../pages/Products";
import { useNavigate, useParams } from "react-router-dom";

export function ProductsList() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { category } = useSaleContext();

  const { execute: execFindMany, response: products } =
    useRequestFindMany<Products>({
      path: "/products",
    });

  useEffect(() => {
    if (category) {
      execFindMany({
        where: {
          categoryId: category,
        },
      });
    }
  }, [category]);

  return (
    <div>
      <h4>Produtos</h4>
      <div
        style={{
          height: 400,
          overflow: "auto",
        }}
      >
        {(products || []).map((item) => (
          <div
            key={item.id}
            style={{
              cursor: "pointer",
              paddingBlock: 5,
              color: productId === item.id ? "#7E9EF0" : "",
            }}
            onClick={() => navigate(`/sales/${item.id}`)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
