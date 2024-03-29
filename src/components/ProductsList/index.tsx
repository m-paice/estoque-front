import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useMemo, useState } from "react";
import { Products } from "../../pages/Products";

interface Props {
  products: Products[];
}

export function ProductsList({ products }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isHovered, setIsHovered] = useState("");

  const productsFiltered = useMemo(() => {
    return search.length > 0
      ? products.filter((client) =>
          client.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [search, products]);

  const handleClickItem = (itemId: string) => {
    setSelected(itemId);
    navigate(`/products/${itemId}`);
  };

  return (
    <div
      style={{
        borderRight: "1px solid #e6e6e6",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          padding: "10px",
          borderRadius: 10,
          border: "1px solid #e6e6e6",
        }}
      >
        <MagnifyingGlassIcon width={20} color="gray" />
        <input
          type="text"
          placeholder="Pesquisa"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
          }}
        />
      </div>
      <div
        style={{
          overflowY: "auto",
          height: "calc(100vh - 255px)",
          marginTop: 20,
        }}
      >
        {search.length > 0 && productsFiltered.length === 0 && (
          <p style={{ textAlign: "center" }}>Nenhum cliente encontrado</p>
        )}
        {(search.length > 0 ? productsFiltered : products).map(
          (product, index) => (
            <div
              key={index}
              style={{
                margin: "10px 0",
                display: "flex",
                gap: 10,
                padding: "10px 5px",
                borderRadius: 5,
                cursor: "pointer",
                transition: "color 0.3s, background-color 0.3s ease",
                color:
                  isHovered === product.id || selected === product.id
                    ? "#7E9EF0"
                    : "",
                backgroundColor: isHovered === product.id ? "#E8ECF4" : "",
              }}
              onClick={() => handleClickItem(product.id)}
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered("")}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#e6e6e6",
                  borderRadius: 50,
                }}
              />
              <div>
                <h4>{product.name}</h4>
                <p>{product.category}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
