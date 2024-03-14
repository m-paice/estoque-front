import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Products } from "./Products";
import { Client } from "./Client";
import { Payment } from "./Payment";
import { Header } from "./Header";
import { Modal } from "../Modal";

export function SalesNew() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <Modal
      title="Registrando de venda"
      isOpen={
        window.location.pathname === "/sales/new" ||
        window.location.pathname.includes("/sales/new/")
      }
      closeModal={() => {
        navigate("/sales");
      }}
    >
      <div style={styles.container}>
        <div>
          <div style={styles.schedule}>
            Complete os campos para registrar uma nova venda
          </div>

          <Header currentStep={step} changeStep={setStep} />

          <div>
            {step === 1 && <Products />}
            {step === 2 && <Client />}
            {step === 3 && <Payment setStep={setStep} />}
          </div>
        </div>
      </div>
    </Modal>
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
