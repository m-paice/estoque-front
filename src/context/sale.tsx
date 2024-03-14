import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface Address {
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement?: string;
}

interface Client {
  name: string;
  document: string;
  cellPhone: string;
  address: Address;
}

interface SaleContextData {
  products: {
    id: string;
    name: string;
    price: number;
    amount: number;
  }[];
  addProduct: ({
    amount,
    product,
  }: {
    product: SaleContextData["products"][0];
    amount: number;
  }) => void;
  removeProduct: (id: string) => void;
  additionAmount(productId: string): void;
  subtractionAmount(productId: string): void;
  client: Client;
  handleSetClient(client: Client): void;
  category: string;
  handleSetCategory(category: string): void;

  handleSubmitSale(): void;
}
export const SaleContext = createContext({} as SaleContextData);

export const SaleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();
  const [client, setClient] = useState<Client>({
    name: "",
    document: "",
    cellPhone: "",
    address: {
      zipcode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });
  const [products, setProducts] = useState<SaleContextData["products"]>([]);
  const [category, setCategory] = useState("");

  const handleSubmitSale = useCallback(() => {
    api
      .post("/orders", {
        products: products.map((item) => ({
          id: item.id,
          amount: item.amount,
        })),
        status: "approved",
        user: {
          name: client.name,
          document: client.document,
          cellPhone: client.cellPhone,
          address: {
            zipcode: client.address.zipcode,
            street: client.address.street,
            number: client.address.number,
            neighborhood: client.address.neighborhood,
            city: client.address.city,
            state: client.address.state,
            complement: client.address.complement,
          },
        },
      })
      .then(() => {
        navigate("/sales");
        setProducts([]);
        setClient({
          name: "",
          document: "",
          cellPhone: "",
          address: {
            zipcode: "",
            street: "",
            number: "",
            neighborhood: "",
            city: "",
            state: "",
          },
        });
      });
  }, [products, client]);

  const handleSetClient = useCallback((client: Client) => {
    setClient(client);
  }, []);

  const handleSetCategory = useCallback((category: string) => {
    setCategory(category);
  }, []);

  const additionAmount = useCallback(
    (productId: string) => {
      const newProducts = products.map((p) => {
        if (p.id === productId) {
          return { ...p, amount: p.amount + 1 };
        }
        return p;
      });

      setProducts(newProducts);
    },
    [products]
  );

  const subtractionAmount = useCallback(
    (productId: string) => {
      if (products.find((p) => p.id === productId)?.amount === 1) return;

      const newProducts = products.map((p) => {
        if (p.id === productId) {
          return { ...p, amount: p.amount - 1 };
        }
        return p;
      });

      setProducts(newProducts);
    },
    [products]
  );

  const addProduct = useCallback(
    ({
      product,
      amount,
    }: {
      product: SaleContextData["products"][0];
      amount: number;
    }) => {
      const productIndex = products.findIndex((p) => p.id === product.id);

      if (productIndex === -1) {
        setProducts((prevState) => [...prevState, { ...product, amount }]);
      } else {
        const newProducts = products.map((p) => {
          if (p.id === product.id) {
            return { ...p, amount: p.amount + amount };
          }
          return p;
        });

        setProducts(newProducts);
      }
    },
    [products]
  );

  const removeProduct = useCallback(
    (id: string) => {
      const newProducts = products.filter((p) => p.id !== id);
      setProducts(newProducts);
    },
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
      additionAmount,
      subtractionAmount,
      category,
      handleSetCategory,
      client,
      handleSetClient,
      handleSubmitSale,
    }),
    [
      products,
      addProduct,
      removeProduct,
      additionAmount,
      subtractionAmount,
      category,
      handleSetCategory,
      client,
      handleSetClient,
      handleSubmitSale,
    ]
  );

  return <SaleContext.Provider value={value}>{children}</SaleContext.Provider>;
};

export const useSaleContext = () => {
  const context = useContext(SaleContext);
  return context;
};
