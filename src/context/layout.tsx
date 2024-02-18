import { createContext, useContext, useState } from "react";

interface LayoutContextProps {
  children: React.ReactNode;
}

interface LayoutContextData {
  hideSidebar: boolean;
  setHideSidebar: (value: boolean) => void;
}

const LayoutContext = createContext<LayoutContextData>({} as LayoutContextData);

export function LayoutContextProvider({ children }: LayoutContextProps) {
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <LayoutContext.Provider
      value={{
        hideSidebar,
        setHideSidebar,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  return context;
}
