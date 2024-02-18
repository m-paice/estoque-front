import { ProductsList } from "../components/ProductsList";
import { ProductsDetails } from "../components/ProductsDetails";
import { ProductsNew } from "../components/ProductsNew";
import { ProductsFilter } from "../components/ProductsFilter";

const products = [
  {
    id: "1",
    name: "Notebook",
    category: "tecnologia",
    price: 1200,
  },
  {
    id: "2",
    name: "Mouse",
    category: "tecnologia",
    price: 50,
  },
  {
    id: "3",
    name: "Teclado",
    category: "tecnologia",
    price: 100,
  },
  {
    id: "4",
    name: "Cadeira",
    category: "móveis",
    price: 200,
  },
  {
    id: "5",
    name: "Mesa",
    category: "móveis",
    price: 300,
  },
  {
    id: "6",
    name: "Copo",
    category: "cozinha",
    price: 10,
  },
  {
    id: "7",
    name: "Prato",
    category: "cozinha",
    price: 15,
  },
  {
    id: "8",
    name: "Faca",
    category: "cozinha",
    price: 20,
  },
  {
    id: "9",
    name: "Garfo",
    category: "cozinha",
    price: 15,
  },
  {
    id: "10",
    name: "Colher",
    category: "cozinha",
    price: 15,
  },
  {
    id: "11",
    name: "Copo",
    category: "cozinha",
    price: 10,
  },
  {
    id: "12",
    name: "Prato",
    category: "cozinha",
    price: 15,
  },
  {
    id: "13",
    name: "Faca",
    category: "cozinha",
    price: 20,
  },
  {
    id: "14",
    name: "Garfo",
    category: "cozinha",
    price: 15,
  },
  {
    id: "15",
    name: "Colher",
    category: "cozinha",
    price: 15,
  },
  {
    id: "16",
    name: "Copo",
    category: "cozinha",
    price: 10,
  },
  {
    id: "17",
    name: "Prato",
    category: "cozinha",
    price: 15,
  },
];

export function Products() {
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
          <ProductsNew />
          <ProductsFilter />
        </div>
        <ProductsList products={products} />
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
