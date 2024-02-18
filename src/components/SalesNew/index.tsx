import { CSSProperties, useState } from "react";

import { Button } from "../Button";
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
  { id: "5", name: "Produto 5", price: 500, amount: 7 },
  { id: "5", name: "Produto 5", price: 500, amount: 7 },
  { id: "5", name: "Produto 5", price: 500, amount: 7 },
  { id: "5", name: "Produto 5", price: 500, amount: 7 },
];

export function SalesNew({ onClose }: Props) {
  const [step, setStep] = useState(1);

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.schedule}>
          Complete os campos para registrar uma nova venda
          <h4>Total da venda: R$ 20,00</h4>
        </div>

        <Header currentStep={step} changeStep={setStep} />

        <div>
          {step === 1 && <Products products={products} />}
          {step === 2 && <Client />}
          {step === 3 && <Payment products={products} />}
        </div>
      </div>

      <div
        style={{
          maxWidth: 300,
          margin: "0 auto",
          display: "flex",
          gap: 10,
        }}
      >
        {step > 1 && (
          <Button
            title="Voltar"
            variant="outiline"
            onClick={() => setStep(step - 1)}
          />
        )}
        <Button
          title={step === 3 ? "Finalizar" : "Avançar"}
          onClick={() => {
            if (step === 3) {
              onClose();
            } else {
              setStep(step + 1);
            }
          }}
        />
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "grid",
    gridTemplateRows: "auto 50px",

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
