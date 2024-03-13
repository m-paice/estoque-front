import { CSSProperties, useState } from "react";

import { Products } from "./Products";
import { Client } from "./Client";
import { Payment } from "./Payment";
import { Header } from "./Header";

export function SalesNew() {
  const [step, setStep] = useState(1);

  return (
    <div style={styles.container}>
      <div>
        <div style={styles.schedule}>
          Complete os campos para registrar uma nova venda
        </div>

        <Header currentStep={step} changeStep={setStep} />

        <div>
          {step === 1 && <Products />}
          {step === 2 && <Client />}
          {step === 3 && <Payment />}
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
