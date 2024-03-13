import { useLayoutEffect } from "react";
import { CategoriesList } from "../components/CategoriesList";
import { CategoriesDetails } from "../components/CategoriesDetails";
import { CategoriesForm } from "../components/CategoriesForm";
import { CategoriesFilter } from "../components/CategoriesFilter";
import { useRequestFindMany } from "../hooks/useRequestFindMany";

export interface Categories {
  id: string;
  name: string;
}

export function Categories() {
  const { execute, response } = useRequestFindMany<Categories>({
    path: "/categories",
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
          Categorias
        </h4>
      </div>
      <div style={styles.grid}>
        <div style={styles.wrapperActions}>
          <CategoriesForm />
          <CategoriesFilter />
        </div>
        <CategoriesList categories={response || []} />
        <CategoriesDetails />
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
