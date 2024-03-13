import { ProductsList } from "../components/ProductsList";
import { ProductsDetails } from "../components/ProductsDetails";
import { ProductsForm } from "../components/ProductsForm";
import { ProductsFilter } from "../components/ProductsFilter";
import { useRequestFindMany } from "../hooks/useRequestFindMany";
import { useLayoutEffect } from "react";

export interface Products {
  id: string;
  name: string;
  category: string;
  price: number;
  amount: number;
}

export function Products() {
  const { execute, response: products } = useRequestFindMany<Products>({
    path: "/products",
  });

  useLayoutEffect(() => {
    execute();
  }, [
    window.location.pathname.includes("/new"),
    window.location.pathname.includes("/edit"),
    window.location.pathname.includes("/delete"),
  ]);

  return (
    <div>
      <div style={styles.container}>
        <h4
          style={{
            fontSize: 24,
            fontWeight: "400",
          }}
        >
          Produtos
        </h4>
      </div>
      <div style={styles.grid}>
        <div style={styles.wrapperActions}>
          <ProductsForm />
          <ProductsFilter />
        </div>
        <ProductsList products={products || []} />
        <ProductsDetails />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ebf3fe",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "200px 300px 1fr",
    gridTemplateRows: "calc(100vh - 200px)",
  },
  wrapperActions: {
    borderRight: "1px solid #e6e6e6",
    paddingRight: 10,
  },
};
