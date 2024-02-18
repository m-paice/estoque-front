import { CategoriesList } from "../components/CategoriesList";
import { CategoriesDetails } from "../components/CategoriesDetails";
import { CategoriesNew } from "../components/CategoriesNew";
import { CategoriesFilter } from "../components/CategoriesFilter";

const categories = [
  {
    id: "1",
    name: "Tecnologia",
  },
  {
    id: "2",
    name: "Moda",
  },
  {
    id: "3",
    name: "Esporte",
  },
  {
    id: "4",
    name: "Livros",
  },
  {
    id: "5",
    name: "Casa",
  },
  {
    id: "6",
    name: "Decoração",
  },
  {
    id: "7",
    name: "Jogos",
  },
  {
    id: "8",
    name: "Brinquedos",
  },
  {
    id: "9",
    name: "Móveis",
  },
  {
    id: "10",
    name: "Beleza",
  },
  {
    id: "11",
    name: "Papelaria",
  },
  {
    id: "12",
    name: "Pet",
  },
  {
    id: "13",
    name: "Alimentos",
  },
  {
    id: "14",
    name: "Bebidas",
  },
  {
    id: "15",
    name: "Outros",
  },
];

export function Categories() {
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
          <CategoriesNew />
          <CategoriesFilter />
        </div>
        <CategoriesList categories={categories} />
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
