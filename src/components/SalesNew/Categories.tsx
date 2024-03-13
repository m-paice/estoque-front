import { useEffect } from "react";
import { useRequestFindMany } from "../../hooks/useRequestFindMany";
import { useSaleContext } from "../../context/sale";

export interface Categories {
  id: string;
  name: string;
}

export function Categories() {
  const { handleSetCategory, category } = useSaleContext();

  const { execute: execFindMany, response: categories } =
    useRequestFindMany<Categories>({
      path: "/categories",
    });

  useEffect(() => {
    execFindMany();
  }, []);

  return (
    <div>
      <h4>Categorias</h4>
      <div
        style={{
          height: 400,
          overflow: "auto",
        }}
      >
        {(categories || []).map((item) => (
          <div
            key={item.id}
            style={{
              cursor: "pointer",
              paddingBlock: 5,
              color: category === item.id ? "#7E9EF0" : "",
            }}
            onClick={() => handleSetCategory(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
