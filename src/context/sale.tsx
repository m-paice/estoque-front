import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface Address {
  zipCode: string;
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
  cellphone: string;
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
}
export const SaleContext = createContext({} as SaleContextData);

export const SaleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [client, setClient] = useState<Client>({
    name: "",
    document: "",
    cellphone: "",
    address: {
      zipCode: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });
  const [products, setProducts] = useState<SaleContextData["products"]>([]);
  const [category, setCategory] = useState("");

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
    ]
  );

  return <SaleContext.Provider value={value}>{children}</SaleContext.Provider>;
};

export const useSaleContext = () => {
  const context = useContext(SaleContext);
  return context;
};
