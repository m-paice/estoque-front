import { CSSProperties, useState } from "react";

import { Products } from "./Products";
import { Client } from "./Client";
import { Payment } from "./Payment";
import { Header } from "./Header";

interface Props {
  onClose: () => void;
}

const products = [
  { id: "1", name: "Produto 1", price: 100, amount: 10 },
  { id: "2", name: "Produto 2", price: 200, amount: 4 },
  { id: "3", name: "Produto 3", price: 300, amount: 5 },
  { id: "4", name: "Produto 4", price: 400, amount: 25 },
  { id: "5", name: "Produto 5", price: 500, amount: 7 },
  { id: "6", name: "Produto 5", price: 500, amount: 7 },
  { id: "7", name: "Produto 5", price: 500, amount: 7 },
  { id: "9", name: "Produto 5", price: 500, amount: 7 },
  { id: "10", name: "Produto 5", price: 500, amount: 7 },
];

export function SalesNew({ onClose }: Props) {
  const [step, setStep] = useState(1);

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.schedule}>
          Complete os campos para registrar uma nova venda
        </div>

        <Header currentStep={step} changeStep={setStep} />

        <div>
          {step === 1 && <Products products={products} />}
          {step === 2 && <Client />}
          {step === 3 && <Payment products={products} />}
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "grid",

    height: "550px",
  },
  schedule: {
    backgroundColor: "#ebf3fe",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
};
